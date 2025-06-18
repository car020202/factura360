/*
  Warnings:

  - Added the required column `empleado_id` to the `facturas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "facturas" ADD COLUMN     "empleado_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Empleado" (
    "id_empleado" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id_empleado")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_correo_key" ON "Empleado"("correo");

-- AddForeignKey
ALTER TABLE "facturas" ADD CONSTRAINT "facturas_empleado_id_fkey" FOREIGN KEY ("empleado_id") REFERENCES "Empleado"("id_empleado") ON DELETE RESTRICT ON UPDATE CASCADE;
