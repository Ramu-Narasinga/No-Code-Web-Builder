/*
  Warnings:

  - Added the required column `activityEvents` to the `VisitorActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `VisitorActivity` ADD COLUMN `activityEvents` VARCHAR(191) NOT NULL;
