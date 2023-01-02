/*
  Warnings:

  - You are about to drop the column `fromName` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `emailId` on the `Recipient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Recipient` DROP FOREIGN KEY `Recipient_emailId_fkey`;

-- AlterTable
ALTER TABLE `Email` DROP COLUMN `fromName`,
    DROP COLUMN `subject`,
    ADD COLUMN `emailMetaId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Recipient` DROP COLUMN `emailId`,
    ADD COLUMN `emailMetaId` INTEGER NULL;

-- CreateTable
CREATE TABLE `EmailMeta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` LONGTEXT NOT NULL,
    `fromName` TEXT NOT NULL,
    `emailId` INTEGER NOT NULL,

    UNIQUE INDEX `EmailMeta_emailId_key`(`emailId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmailMeta` ADD CONSTRAINT `EmailMeta_emailId_fkey` FOREIGN KEY (`emailId`) REFERENCES `Email`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recipient` ADD CONSTRAINT `Recipient_emailMetaId_fkey` FOREIGN KEY (`emailMetaId`) REFERENCES `EmailMeta`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
