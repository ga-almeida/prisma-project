import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const skip = 0;
    await prisma.courses.findMany({
        // Quantidade de itens que iria pular da busca
        skip,
        // Quantos itens irá ser feito a busca
        take: 2
    });
}

main();
