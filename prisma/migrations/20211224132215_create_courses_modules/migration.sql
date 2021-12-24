-- CreateTable
CREATE TABLE "modules_courses" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "modules_courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "modules_courses" ADD CONSTRAINT "modules_courses_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modules_courses" ADD CONSTRAINT "modules_courses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
