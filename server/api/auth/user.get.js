import { userTransformer } from "~/server/transformers/users"

export default defineEventHandler(async (event) => {
    return {
        user: event.context
    }
})