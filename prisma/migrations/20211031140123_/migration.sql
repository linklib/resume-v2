/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `techId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Tech` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tech" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "image" TEXT,
    "lavel" TEXT,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "Tech_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tech" ("desc", "id", "image", "lavel", "name") SELECT "desc", "id", "image", "lavel", "name" FROM "Tech";
DROP TABLE "Tech";
ALTER TABLE "new_Tech" RENAME TO "Tech";
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id", "name") SELECT "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
