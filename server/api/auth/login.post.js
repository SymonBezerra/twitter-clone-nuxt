import { findUserbyUsername } from "~/server/db/users"
import bcrypt from "bcrypt"

export default defineEventHandler(
async (event) => {
    const body = await readBody(event)

    const { username, password } = body

    if (!username || !password)
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid login parameters"
        }))

    // is the user registered?
    const user = await findUserbyUsername(username)
    if (!user)
        return sendError(event, createError({
            statusCode: 404,
            statusMessage: "Username not found"
        }))

    // is password correct?
    const passwordsMatch = await bcrypt.compare(password, user.password)
    if (!passwordsMatch)
        return sendError(event, createError({
            statusCode: 402,
            statusMessage: "Username not found"
        }))

    // generate tokens
    const { accessToken, refreshToken } = generateTokens()

})