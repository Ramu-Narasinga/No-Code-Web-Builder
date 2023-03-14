/*
  Warnings:

  - You are about to drop the column `css` on the `VisitorActivity` table. All the data in the column will be lost.
  - You are about to drop the column `html` on the `VisitorActivity` table. All the data in the column will be lost.
  - You are about to drop the column `recordedOn` on the `VisitorActivity` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `VisitorActivity` table. All the data in the column will be lost.
  - Added the required column `city` to the `VisitorActivity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `VisitorActivity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `VisitorActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `VisitorActivity` DROP COLUMN `css`,
    DROP COLUMN `html`,
    DROP COLUMN `recordedOn`,
    DROP COLUMN `status`,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ALTER COLUMN `activityType` DROP DEFAULT;

-- CreateTable
CREATE TABLE `ErrorActivity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endpoint` VARCHAR(191) NOT NULL,
    `visitorActivityId` INTEGER NOT NULL,

    UNIQUE INDEX `ErrorActivity_visitorActivityId_key`(`visitorActivityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeedbackActivity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `visitorActivityId` INTEGER NOT NULL,

    UNIQUE INDEX `FeedbackActivity_visitorActivityId_key`(`visitorActivityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ErrorActivity` ADD CONSTRAINT `ErrorActivity_visitorActivityId_fkey` FOREIGN KEY (`visitorActivityId`) REFERENCES `VisitorActivity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedbackActivity` ADD CONSTRAINT `FeedbackActivity_visitorActivityId_fkey` FOREIGN KEY (`visitorActivityId`) REFERENCES `VisitorActivity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
