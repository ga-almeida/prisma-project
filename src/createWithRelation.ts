import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Essa opção cria um course, relaciona um teacher onde não sabemos se existe.
    // Caso ele não exista é criado um novo teacher
    await prisma.courses.create({
        data: {
            duration: 200,
            name: "Course of Prisma",
            description: "Excelent course of Prisma",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Gabriel"
                    },
                    create: {
                        name: "Gabriel"
                    }
                }
            }
        }
    });

    // Essa opção cria um curso, e relaciona com um teacher já existente.
    await prisma.courses.create({
        data: {
            duration: 200,
            name: "Course of Prisma",
            description: "Excelent course of Prisma",
            teacher: {
                connect: {
                    id: "id_existente"
                }
            }
        }
    });

    // Essa opção cria um course, relaciona um teacher onde não existe.
    // Dessa forma a transação acaba tambem inserindo um novo teacher
    await prisma.courses.create({
        data: {
            duration: 200,
            name: "Course of Prisma",
            description: "Excelent course of Prisma",
            teacher: {
                create: {
                    name: "Gabriel"
                }
            }
        }
    });
}

main();
