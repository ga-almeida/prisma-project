import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Exclui um item do modules_courses
    await prisma.modulesCourses.delete({
        where: {
            id: "id_existente"
        }
    });
}

main();
