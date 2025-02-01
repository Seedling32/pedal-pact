/*
  Warnings:

  - You are about to drop the column `name` on the `ride` table. All the data in the column will be lost.
  - Added the required column `slug` to the `ride` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `ride` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ride" DROP COLUMN "name",
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "date" SET NOT NULL;
