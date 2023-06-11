-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "content" BYTEA NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
