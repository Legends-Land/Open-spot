/*
  Warnings:

  - You are about to drop the column `email` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `GuestId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `Properties` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Host` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guestId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('HOST', 'GUEST');

-- DropIndex
DROP INDEX "Guest_email_key";

-- DropIndex
DROP INDEX "Host_email_key";

-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "email",
DROP COLUMN "password",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Host" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "password",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "GuestId",
ADD COLUMN     "guestId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Properties";

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "availableParking" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "hostId" INTEGER NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_userId_key" ON "Guest"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Host_userId_key" ON "Host"("userId");

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
