-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tech_stack" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "readme_content" TEXT,
    "github_created_at" DATETIME,
    "visible" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "synced_at" DATETIME
);

-- CreateTable
CREATE TABLE "Career" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME,
    "descriptions" TEXT,
    "extra" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_github_id_key" ON "Project"("github_id");
