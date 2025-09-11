-- CreateTable
CREATE TABLE "public"."Emotions" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "Emotions_pkey" PRIMARY KEY ("id")
);
