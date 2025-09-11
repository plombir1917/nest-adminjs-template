/*
  Warnings:

  - You are about to drop the column `decription` on the `Main` table. All the data in the column will be lost.
  - Added the required column `description` to the `Main` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Main" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT NOT NULL;
