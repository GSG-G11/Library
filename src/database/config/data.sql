BEGIN;

INSERT INTO authors (id, name, location) VALUES
(
    1,'author1' , 'gaza'
),
(
    2,'author2' , 'gaza'
),
(
    3,'author3' , 'gaza'
);

INSERT INTO books (name , release_date ,author_id) VALUES
(
    'book1' , '1/1/2022',1
),
(
    'book2' , '1/1/2022',2
),
(
    'book3' , '1/1/2022',3
);

COMMIT;