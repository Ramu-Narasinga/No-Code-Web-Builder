/*
  Warnings:

  - Added the required column `fromName` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Email` ADD COLUMN `fromName` TEXT NOT NULL,
    ADD COLUMN `subject` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `Recipient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emailId` INTEGER NULL,
    `recipientEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Recipient_recipientEmail_key`(`recipientEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Recipient` ADD CONSTRAINT `Recipient_emailId_fkey` FOREIGN KEY (`emailId`) REFERENCES `Email`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
