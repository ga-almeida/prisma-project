import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Busca todos os courses que comece com "Curso" independente se é caixa alta ou nao
    await prisma.courses.findMany({
        where: {
            name: {
                startsWith: "Curso",
                mode: "insensitive"
            }
        }
    });

    // Traz todos os courses que contenha no name courso ou java
    await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: "curso"
                    }
                },
                {
                    name: {
                        contains: "java"
                    }
                }
            ]
        }
    });

    // Traz todos os courses que contenha no name courso ou java que tenha
    // a duração de 300
    await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: "curso"
                    }
                },
                {
                    name: {
                        contains: "java"
                    }
                }
            ],
            AND: {
                duration: 300
            }
        }
    });
}

main();
