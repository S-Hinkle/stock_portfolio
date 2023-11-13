-- Create 'user' table first since it's referenced by the 'stock' table
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    PRIMARY KEY ("id")
);

-- Create 'stock' table with inline primary key and foreign key definitions
CREATE TABLE "stock" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "ticker" VARCHAR(255) NOT NULL,
    "shares" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("user_id") REFERENCES "user" ("id")
);
