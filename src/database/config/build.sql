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

INSERT INTO authors (id, name, location) VALUES
(
    1,'Khaled Hosseini' , 'gaza'
),
(
    2,'Mustafa Mahmoud' , 'gaza'
),
(
    3,'Ibrahim al-Fiqi' , 'gaza'
),
(
    4,'William Shakespeare' , 'gaza'
),
(
    5,'Franz Kafka' , 'gaza'
);

INSERT INTO books (name , release_date ,author_id) VALUES
(
    'The kite runner' , '1/1/2022',1
),
(
    'time management' , '1/1/2022',2
),
(
    'King Lear' , '1/1/2022',3
);

COMMIT;