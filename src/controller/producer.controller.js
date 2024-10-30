import movieModel from "../model/movie.model.js";
import producerModel from "../model/producer.model.js";

class Producer {
    static async getProducerById(req, res, next)
    {
        const {id} = req.params

        try 
        {
            const findProducer = await producerModel.findById(id);      
            if(!findProducer) res.status(400).send({message: "Producer not found!"})

            const findProducerMovies = await movieModel.find({producerId: id})
            res.status(200).send({findProducer, findProducerMovies});
        } 
        catch (error) 
        {
            console.log("Error in getting producer movie", error);
            next(error)
        }
    }
}

export default Producer