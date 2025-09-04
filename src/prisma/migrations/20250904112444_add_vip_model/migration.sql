-- CreateTable
CREATE TABLE "public"."vip" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "vip_pkey" PRIMARY KEY ("id")
);
