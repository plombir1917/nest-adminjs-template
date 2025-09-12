/*
  Warnings:

  - Added the required column `emotioins_id` to the `emotions_photo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_id` to the `main_photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."emotions_photo" ADD COLUMN     "emotioins_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."main_photo" ADD COLUMN     "main_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."emotions_photo" ADD CONSTRAINT "emotions_photo_emotioins_id_fkey" FOREIGN KEY ("emotioins_id") REFERENCES "public"."emotions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."main_photo" ADD CONSTRAINT "main_photo_main_id_fkey" FOREIGN KEY ("main_id") REFERENCES "public"."main"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
