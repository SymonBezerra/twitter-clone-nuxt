import { User } from "@prisma/client"

export const userTransformer = (user: User) => {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
    }
}