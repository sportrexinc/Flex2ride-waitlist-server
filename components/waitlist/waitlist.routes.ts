import { Router } from "express";
import { getEarlyAccess, partership, sendMessage } from "./controller/earlyAccess";
import { earlyAccessSchema, partnershipSchema, sendMessageSchema } from "./validations/waitlistSchema";
import { validateInput } from "../../helpers/schamaValidation";

const router = Router()
  router.post("/early-access", validateInput(earlyAccessSchema) , getEarlyAccess)
  router.post("/send-message", validateInput(sendMessageSchema) , sendMessage)
  router.post("/partnership", validateInput(partnershipSchema), partership)

const waitlistRouter = router
export default waitlistRouter  