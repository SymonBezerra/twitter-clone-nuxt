import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt"
import { findRefreshTokenByToken } from "~/server/db/refreshTokens"
import { findUserById } from "~/server/db/users"

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, "refresh_token")
    if (!refreshToken)
        return sendError(event, createError({
            statusMessage: "Refresh token is invalid",
            statusCode: 401
    }))

    const rToken = await findRefreshTokenByToken(refreshToken)
    if (!rToken)
        return sendError(event, createError({
            statusMessage: "Refresh token is invalid",
            statusCode: 401
    }))

    const token = decodeRefreshToken(refreshToken)

    try {
        const user = await findUserById(token.userId)
        console.log(JSON.stringify(user))
        const { accessToken } = generateTokens(user)
        return {
            "access_token": accessToken
        }
    } catch (error) {
        return sendError(event, createError({
            statusMessage: "Internal error",
            statusCode: 401
        }))
    }
})