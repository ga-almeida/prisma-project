import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.courses.update({
        where: {
            id: "057ac610-7ff2-429d-a518-029f9a56958a"
        },
        data: {
            duration: 230,
            description: "Course Prisma with duration altered"
        }
    });
}

main();
