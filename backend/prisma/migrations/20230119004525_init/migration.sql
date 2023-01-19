/*
  Warnings:

  - You are about to alter the column `rating` on the `FeedbackActivity` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `ip` to the `VisitorActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FeedbackActivity` MODIFY `rating` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `VisitorActivity` ADD COLUMN `ip` VARCHAR(191) NOT NULL;
