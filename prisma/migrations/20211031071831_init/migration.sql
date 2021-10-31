-- CreateTable
CREATE TABLE "Tech" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "image" TEXT,
    "lavel" TEXT
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "techId" TEXT NOT NULL,
    CONSTRAINT "Category_techId_fkey" FOREIGN KEY ("techId") REFERENCES "Tech" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
