import { PrismaClient,  } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    
    // Cria um module e relasciona com um course existente
    await prisma.modules.create({
        data: {
            name: "Aprendendo firebase",
            description: "Aprendendo firebase do zero",
            ModulesCourses: {
                create: {
                    course: {
                        connect: {
                            id: "id_existente"
                        }
                    }
                }
            }
        }
    });

    // Cria um modules_courses onde os dois ja existem
    await prisma.modulesCourses.create({
        data: {
            module_id: "id_existente",
            course_id: "id_existente"
        }
    });

    // Cria um modules_courses e cria um module e um course
    await prisma.modulesCourses.create({
        data: {
            module: {
                create: {
                    description: "Curso completo de Prisma",
                    name: "Curso de Prisma"
                }
            },
            course: {
                create: {
                    duration: 200,
                    name: "Java",
                    description: "Java avançado",
                    teacher_id: "id_existente"
                }
            }
        }
    });
}

main();
