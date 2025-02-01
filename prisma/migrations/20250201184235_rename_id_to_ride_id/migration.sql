/*
  Warnings:

  - The primary key for the `ride` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ride` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ride" DROP CONSTRAINT "ride_pkey",
DROP COLUMN "id",
ADD COLUMN     "ride_id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "ride_pkey" PRIMARY KEY ("ride_id");
