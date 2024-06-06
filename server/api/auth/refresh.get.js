import { getRefreshTokenByToken } from "~/server/db/refreshTokens"
import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt"
import { getUserById } from "~/server/db/users"
import { getCookie } from "h3"

export default defineEventHandler(async (event) => {
    const cookies = getCookie(event, "refreshToken")
    const refreshToken = cookies.refreshToken
    if (!refreshToken)
        return sendError(event, createError({
            statusMessage: "Refresh token is invalid",
            statusCode: 401
    }))

    const rToken = await getRefreshTokenByToken(refreshToken)
    if (!rToken)
        return sendError(event, createError({
            statusMessage: "Refresh token is invalid",
            statusCode: 401
    }))

    const token = decodeRefreshToken(refreshToken)

    try {
        const user = await getUserById(token.userId)
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