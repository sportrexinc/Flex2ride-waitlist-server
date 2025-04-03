import Joi from "joi";

export const earlyAccessSchema = Joi.object({
    email: Joi.string().email().required()
})

export const sendMessageSchema = Joi.object({
    email: Joi.string().email().required(),
    text: Joi.string().required()
})

export const partnershipSchema = Joi.object({
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    country: Joi.string().required(),
    rfp: Joi.string().required(),
})