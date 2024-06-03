import { prisma } from "."
import bcrypt from "bcrypt"

export const createUser = async (userData: any) => {
    const hashedPassword = bcrypt.hashSync(userData.password, 10)
    const finalUserData = {
        ...userData,
        password: hashedPassword
    }
    return await prisma.user.create({
        data: finalUserData
    })
}