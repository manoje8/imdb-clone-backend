import actorModel from "../model/actor.model.js";
import movieModel from "../model/movie.model.js";

class Actor{
    
    static async getActorById(req, res, next)
    {
        const {id} = req.params
        try 
        {
            const findActor = await actorModel.findById(id);      
            if(!findActor) res.status(400).send({message: "Actor not found!"})

            const findActorMovies = await movieModel.find({actorIds: id})
            res.status(200).send({findActor, findActorMovies});
        } 
        catch (error) 
        {
            console.log("Error in getting actor with his movie", error);
            next(error)
        }
    }
}
export default Actor