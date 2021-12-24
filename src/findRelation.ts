import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Essa opção busca todos courses e inclui a relação com teacher
    await prisma.courses.findMany({
        include: {
            teacher: true
        }
    });
}

main();
