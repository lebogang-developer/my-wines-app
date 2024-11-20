-- CreateEnum
CREATE TYPE "WineType" AS ENUM ('RED', 'WHITE', 'ROSE', 'WHITE_BLEND', 'RED_BLEND');

-- CreateEnum
CREATE TYPE "Varietal" AS ENUM ('CABERNET_SAUVIGNON', 'MERLOT', 'SHIRAZ', 'CHENIN_BLANC', 'SAUVIGNON_BLANC', 'VERDELHO', 'CHARDONNAY', 'DURIF');

-- CreateTable
CREATE TABLE "Wine" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "year" INTEGER NOT NULL,
    "type" "WineType" NOT NULL,
    "varietal" "Varietal" NOT NULL,
    "rating" DECIMAL(65,30),
    "consumed" BOOLEAN NOT NULL DEFAULT false,
    "dateConsumed" TIMESTAMP(3),

    CONSTRAINT "Wine_pkey" PRIMARY KEY ("id")
);
