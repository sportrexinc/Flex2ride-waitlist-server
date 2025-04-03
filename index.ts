import express, { Response } from "express"
import env from "dotenv"
import cors, { CorsOptions } from "cors"
import helmet from "helmet"
import mongoose from "mongoose"
import V1Routes from "./components/routes"

env.config()

const corsOptions: CorsOptions = {
    origin: ["http://localhost:3000/*", "https://www.flex2ride.com/*"],
    methods: ["POST", "GET"]
}

mongoose.connect(process.env.MONGODB_URI as string)
.then(() => {
    console.log("Database connected")
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
    
})

const app = express()
app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1", V1Routes)

app.get("/", (_, res: Response) => {
    res.json({ message: "Welcome to the flex2ride waitlist server" })
})