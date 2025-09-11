/*
  Warnings:

  - The primary key for the `vip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Emotions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emotions_photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Main` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Main_photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Map` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Statistics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."vip" DROP CONSTRAINT "vip_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "vip_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "vip_id_seq";

-- DropTable
DROP TABLE "public"."Emotions";

-- DropTable
DROP TABLE "public"."Emotions_photo";

-- DropTable
DROP TABLE "public"."Gallery";

-- DropTable
DROP TABLE "public"."Main";

-- DropTable
DROP TABLE "public"."Main_photo";

-- DropTable
DROP TABLE "public"."Map";

-- DropTable
DROP TABLE "public"."Statistics";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."gallery" (
    "id" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."map" (
    "id" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."emotions" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "emotions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."emotions_photo" (
    "id" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "emotions_photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."statistics" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "statistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."main" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "description" TEXT NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "main_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."main_photo" (
    "id" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "main_photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");
