-- Insert data into 'user' table
INSERT INTO "user" (name) VALUES ('Alice');
INSERT INTO "user" (name) VALUES ('Bob');
INSERT INTO "user" (name) VALUES ('Charlie');
INSERT INTO "user" (name) VALUES ('Diana');

-- Insert data into 'stock' table
-- Stocks for Alice
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Apple', 'AAPL', 100, 1);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Exxon Mobil', 'XOM', 150, 1);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Schlumberger', 'SLB', 200, 1);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Microsoft', 'MSFT', 250, 1);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Apple', 'AAPL', 300, 1);

-- Stocks for Bob
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Exxon Mobil', 'XOM', 350, 2);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Schlumberger', 'SLB', 400, 2);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Microsoft', 'MSFT', 450, 2);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Apple', 'AAPL', 500, 2);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Exxon Mobil', 'XOM', 550, 2);

-- Stocks for Charlie
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Schlumberger', 'SLB', 600, 3);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Microsoft', 'MSFT', 650, 3);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Apple', 'AAPL', 700, 3);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Exxon Mobil', 'XOM', 750, 3);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Schlumberger', 'SLB', 800, 3);

-- Stocks for Diana
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Microsoft', 'MSFT', 850, 4);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Apple', 'AAPL', 900, 4);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Exxon Mobil', 'XOM', 950, 4);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Schlumberger', 'SLB', 1000, 4);
INSERT INTO "stock" (name, ticker, shares, user_id) VALUES ('Microsoft', 'MSFT', 1050, 4);
