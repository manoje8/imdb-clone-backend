import { model, Schema } from "mongoose";

const producerSchema = new Schema(
    {
        name: { type: String, required: true },
        company: { type: String },
        bio: { type: String },
    },
    {
        timestamps: true,
        collection: 'producers',
        versionKey: false
    }
);

const producerModel = model('producers', producerSchema)

export default producerModel