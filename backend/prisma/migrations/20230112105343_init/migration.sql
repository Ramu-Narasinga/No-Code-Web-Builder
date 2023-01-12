/*
  Warnings:

  - You are about to drop the column `activityEvents` on the `VisitorActivity` table. All the data in the column will be lost.
  - Added the required column `activityEventsUrl` to the `VisitorActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `VisitorActivity` DROP COLUMN `activityEvents`,
    ADD COLUMN `activityEventsUrl` VARCHAR(191) NOT NULL;
