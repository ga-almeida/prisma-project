import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Cria um author e um book
    await prisma.authors.create({
        data: {
            name: "Gabriel",
            books: {
                create: {
                    name: "Código limpo"
                }
            }
        }
    });

    // Cria um author e varios books
    await prisma.authors.create({
        data: {
            name: "Gabriel",
            books: {
                createMany: {
                    data: [
                        {
                            name: "Como comecar em desenvolvimento com front."
                        },
                        {
                            name: "Como comecar em desenvolvimento com back."
                        }
                    ]
                }
            }
        }
    });

    // Cria um book com algum author existente
    await prisma.books.create({
        data: {
            name: "Arquitetura limpa",
            author_id: "id_ja_existente"
        }
    });
}

main();
