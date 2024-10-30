import { model, Schema } from "mongoose";

const actorSchema = new Schema(
    {
        name: {type: String},
        profile: {type: String},
        dob: {type: Date},
        bio: {type: String}
    },
    {
        timestamps: true,
        collection: 'actors',
        versionKey: false
    }
)

const actorModel = model('actors', actorSchema);

export default actorModel