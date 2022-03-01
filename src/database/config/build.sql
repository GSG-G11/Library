BEGIN;

DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;

CREATE TABLE authors (
    id INT PRIMARY KEY ,
    name VARCHAR(125) ,
    location VARCHAR(125) 
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(125) ,
    release_date VARCHAR(100) ,
    author_id INT references authors(id)
);

COMMIT;