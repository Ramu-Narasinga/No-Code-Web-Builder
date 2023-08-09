-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'ACTIVE');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('ERROR', 'FEEDBACK');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "html" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailMeta" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "emailId" INTEGER NOT NULL,

    CONSTRAINT "EmailMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipient" (
    "id" SERIAL NOT NULL,
    "emailMetaId" INTEGER,
    "recipientEmail" TEXT NOT NULL,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Website" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "html" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitorActivity" (
    "id" SERIAL NOT NULL,
    "activityType" "ActivityType" NOT NULL,
    "ip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" INTEGER,
    "websiteId" INTEGER,
    "activityEventsUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitorActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ErrorActivity" (
    "id" SERIAL NOT NULL,
    "endpoint" TEXT NOT NULL,
    "visitorActivityId" INTEGER NOT NULL,

    CONSTRAINT "ErrorActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedbackActivity" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "visitorActivityId" INTEGER NOT NULL,

    CONSTRAINT "FeedbackActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rmr_User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "resumePath" TEXT NOT NULL,
    "newsletterSubsribed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rmr_User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmailMeta_emailId_key" ON "EmailMeta"("emailId");

-- CreateIndex
CREATE UNIQUE INDEX "Recipient_recipientEmail_key" ON "Recipient"("recipientEmail");

-- CreateIndex
CREATE UNIQUE INDEX "ErrorActivity_visitorActivityId_key" ON "ErrorActivity"("visitorActivityId");

-- CreateIndex
CREATE UNIQUE INDEX "FeedbackActivity_visitorActivityId_key" ON "FeedbackActivity"("visitorActivityId");

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailMeta" ADD CONSTRAINT "EmailMeta_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Email"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_emailMetaId_fkey" FOREIGN KEY ("emailMetaId") REFERENCES "EmailMeta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Website" ADD CONSTRAINT "Website_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitorActivity" ADD CONSTRAINT "VisitorActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitorActivity" ADD CONSTRAINT "VisitorActivity_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErrorActivity" ADD CONSTRAINT "ErrorActivity_visitorActivityId_fkey" FOREIGN KEY ("visitorActivityId") REFERENCES "VisitorActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedbackActivity" ADD CONSTRAINT "FeedbackActivity_visitorActivityId_fkey" FOREIGN KEY ("visitorActivityId") REFERENCES "VisitorActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
