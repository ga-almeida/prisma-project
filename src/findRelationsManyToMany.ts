import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Incluir na busca de courses o relacionamento com modules
    await prisma.courses.findMany({
        where: {
            id: "id_exsitente"
        },
        include: {
            ModulesCourses: true
        }
    });

    // Incluir na busca os courses e modules
    await prisma.modulesCourses.findMany({
        include: {
            course: true,
            module: true
        }
    });
}

main();
