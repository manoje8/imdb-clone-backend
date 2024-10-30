import actorModel from "../model/actor.model.js";
import movieModel from "../model/movie.model.js";
import producerModel from "../model/producer.model.js";

class Movie {

    // Get all the Movies
    static async fetchMovies(req, res, next)
    {
        try 
        {
            const movies = await movieModel.find()
            .populate('producerId', 'name')
            .populate('actorIds', 'name');
            if(!movieModel) return res.status(400).send({message: "Movies not found"});

            res.status(200).json(movies)
        } 
        catch (error) 
        {
            console.log("Error in fetching movie: ", error);
            next(error)
        }
    }


    // Get movies by id
    static async getMovieById(req, res, next)
    {
        const {id} = req.params
        try 
        {
            const findMovie = await movieModel.findById(id)
            .populate('producerId')
            .populate('actorIds');         
            if(!findMovie) res.status(400).send({message: "Movie not found!"})
            res.status(200).send(findMovie);
        } 
        catch (error) 
        {
            console.log("Error in updating movie", error);
            next(error)
        }
    }


    //Add movie
    static async addMovie(req, res, next) {
        const { name, releaseYear, plot, poster,producer, actors } = req.body;
        try 
        { 
            // Check for existing producer
            let findProducer = await producerModel.findOne({ name: producer.name });
            if (!findProducer) 
            {
                findProducer = await producerModel.create({
                    name: producer.name,
                    company: producer.company,
                    bio: producer.bio
                });
            }

            // Create or update actors
            const actorIds = await Promise.all(
                actors.map(async (actor) => {
                    let findActor = await actorModel.findOne({ name: actor.name });
                    if (!findActor) {
                        findActor = await actorModel.create({
                            name: actor.name,
                            profile: actor.profile,
                            dob: actor.dob,
                            bio: actor.bio
                        });
                    }
                    return findActor._id;
                })
            );

            const findMovie = await movieModel.findOne({name})
            if(findMovie) return res.status(400).send({message: "Movie already registered"})

            // Create the movie
            const newMovie = await movieModel.create({
                name,
                plot,
                poster,
                releaseYear,
                producerId: findProducer._id,
                actorIds: actorIds
            });

            return res.status(201).send(newMovie);
        } 
        catch (error) 
        {
          console.log("Error in adding movie", error);
          next(error)
        }
    }



    // Update movie
    static async updateMovie(req, res, next) {
        const { id } = req.params;
        const { name, plot, poster, releaseYear, producer, actors } = req.body.values;
        
        try {
            // Find or create/update producer
            let findProducer = await producerModel.findOne({ name: producer.name });
            if (findProducer) 
            {
                findProducer = await producerModel.findByIdAndUpdate(
                    findProducer._id,
                    { company: producer.company, bio: producer.bio },
                    { new: true }
                );
            } else 
            {
                findProducer = await producerModel.create({
                    name: producer.name,
                    company: producer.company,
                    bio: producer.bio
                });
            }

            // Create or update actors and get their IDs
            const actorIds = await Promise.all(
                actors.map(async (actor) => {
                    let findActor = await actorModel.findOne({ name: actor.name });
                    if (findActor) 
                    {
                        findActor = await actorModel.findByIdAndUpdate(
                            findActor._id,
                            { profile: actor.profile, dob: actor.dob, bio: actor.bio },
                            { new: true }
                        );
                    } else 
                    {
                        findActor = await actorModel.create({
                            name: actor.name,
                            profile: actor.profile,
                            dob: actor.dob,
                            bio: actor.bio
                        });
                    }
                    return findActor._id;
                })
            );

            // Find and update the movie
            const updatedMovie = await movieModel.findByIdAndUpdate(
                id,
                {
                    name,
                    plot,
                    poster,
                    releaseYear,
                    producerId: findProducer._id,
                    actorIds: actorIds
                },
                { new: true }
            );

            if (!updatedMovie) return res.status(404).send({ message: "Movie not found" });

            return res.status(200).send(updatedMovie);
        }
        catch (error) 
        {
            console.log("Error in updating movie", error);
            next(error)
        }
    }

    static async deleteMovie(req, res, next) {
        const {id} = req.params
        try 
        {
            const findMovie = await movieModel.findById(id);
            
            if(!findMovie) res.status(400).send({message: "Movie not found!"})

            await movieModel.findByIdAndDelete(id);
            res.status(200).send({ message: 'Movie deleted successfully' });
        } 
        catch (error) 
        {
            console.log("Error in deleting movie", error);
            next(error)
        }
    }
}

export default Movie