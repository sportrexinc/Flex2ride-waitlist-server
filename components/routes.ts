import { Router } from "express";
import waitlistRouter from "./waitlist/waitlist.routes";

const router = Router()

router.use("/waitlist", waitlistRouter)

export default router