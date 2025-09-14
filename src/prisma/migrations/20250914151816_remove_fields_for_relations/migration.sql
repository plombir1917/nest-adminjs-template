/*
  Warnings:

  - You are about to drop the column `emotioins_id` on the `emotions_photo` table. All the data in the column will be lost.
  - You are about to drop the column `main_id` on the `main_photo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."emotions_photo" DROP COLUMN "emotioins_id";

-- AlterTable
ALTER TABLE "public"."main_photo" DROP COLUMN "main_id";
