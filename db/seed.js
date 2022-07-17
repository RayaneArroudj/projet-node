import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { user: user } = prisma

async function main() {
    await user.create({
        data: {
            name: 'Luffy',
            Post: {
                create: [
                    {
                        title: 'Nouveau roi des pirates',
                        content: 'Luffy devient le nouveau roi des pirates',
                    },
                    {
                        title: 'Luffy a battu Kaido',
                        content: 'kaido a perdu',
                    },
                ],
            },
        },
    })
}

main()
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
