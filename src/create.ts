import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Course of Prisma",
            description: "Excelent course of Prisma",
            teacher_id: "id_existente"
        }
    });

    console.log(result);
}

main();
