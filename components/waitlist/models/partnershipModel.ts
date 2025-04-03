import { model, Schema } from "mongoose";

interface SchemaProps {
    email: string
    fullName: string
    country: string
    rfp: string
}

const schmema = new Schema<SchemaProps>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    rfp: {
        type: String,
        required: true,
    }
})

const partershipModel = model<SchemaProps>("partership", schmema)

export default partershipModel