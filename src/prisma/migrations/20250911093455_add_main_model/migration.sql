-- CreateTable
CREATE TABLE "public"."Main" (
    "id" SERIAL NOT NULL,
    "photo" TEXT,
    "decription" TEXT NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "Main_pkey" PRIMARY KEY ("id")
);
