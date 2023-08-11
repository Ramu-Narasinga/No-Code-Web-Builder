/*
  Warnings:

  - You are about to drop the column `newsletterSubsribed` on the `Rmr_User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Rmr_User" DROP COLUMN "newsletterSubsribed",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'user',
ADD COLUMN     "newsletterSubscribed" BOOLEAN NOT NULL DEFAULT false;
