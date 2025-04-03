import { model, Schema } from "mongoose";

const schema = new Schema<{email: string}>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }
})

const earlyAccessModel = model<{email: string}>("early-access", schema)

export default earlyAccessModel