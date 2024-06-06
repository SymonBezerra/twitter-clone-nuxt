import { prisma } from "."
import bcrypt from "bcrypt"

export const createUser = async (userData) => {
    const hashedPassword = bcrypt.hashSync(userData.password, 10)
    const finalUserData = {
        ...userData,
        password: hashedPassword
    }
    return await prisma.user.create({
        data: finalUserData
    })
}


export const findUserbyUsername = async (username) => {
    return await prisma.user.findUnique({ where: { username }})
}

export const findUserbyId = async (username) => {
    return await prisma.user.findUnique({ where: { id }})
}