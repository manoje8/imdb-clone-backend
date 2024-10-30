import { model, Schema, Types } from "mongoose";

const movieSchema = new Schema(
    {
        name: { type: String, required: true },
        plot: {type: String},
        poster: { type: String},
        rating: { type: Number, default: 0},
        releaseYear: { type: Number, required: true },
        producerId: { type: Types.ObjectId, ref: 'producers', required: true },
        actorIds: [{ type: Types.ObjectId, ref: 'actors' }],
    },
    {
        timestamps: true,
        collection: 'movies',
        versionKey: false
    }
);

const movieModel = model('movies', movieSchema);

export default movieModel