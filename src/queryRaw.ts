import { PrismaClient, Prisma, Modules } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.$queryRaw<Modules[]>(
        Prisma.sql`SELECT * FROM modules`
    );
}

main();
