import { findUserbyUsername } from "~/server/db/users"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt"
import { userTransformer } from "~/server/transformers/users"
import { createRefreshToken } from "~/server/db/refreshTokens"

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
            statusMessage: "Invalid password"
        }))

    // generate tokens
    const { accessToken, refreshToken } = generateTokens(user)

    // save it on db

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // add http only cookie
    sendRefreshToken(event, refreshToken)

    return {
        "access_token": accessToken,
        "user": userTransformer(user)
    }

})