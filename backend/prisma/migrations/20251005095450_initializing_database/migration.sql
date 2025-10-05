-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(200) NOT NULL,
    "last_name" VARCHAR(200) NOT NULL,
    "aadhar_number" VARCHAR(200) NOT NULL,
    "picture_url" VARCHAR(200) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicId" (
    "id" SERIAL NOT NULL,
    "dynamicId" VARCHAR(200) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "qrCode" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "DynamicId_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_aadhar_number_key" ON "User"("aadhar_number");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicId_id_key" ON "DynamicId"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicId_dynamicId_key" ON "DynamicId"("dynamicId");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicId_user_id_key" ON "DynamicId"("user_id");

-- AddForeignKey
ALTER TABLE "DynamicId" ADD CONSTRAINT "DynamicId_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
