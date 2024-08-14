import { prismaClient } from "../src/appliaction/database";

export class UserTest {
    static async delete(){
        await prismaClient.user.deleteMany({
            where: {
                username: 'test'
            }
        })
    }
}