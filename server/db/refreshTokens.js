import { prisma } from "."

export const createRefreshToken = async (refreshToken) => {
    return await prisma.refreshToken.create({
        data: refreshToken
    })
}

export const findRefreshTokenByToken = async(refreshToken) => {
    return await prisma.refreshToken.findUnique({
        where: { token: refreshToken }
    })
}