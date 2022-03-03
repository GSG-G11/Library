const request = require('supertest');
const app = require('../app');
const connection = require('../database/config/connection');
const controllers = require('../controllers');
const { dbBuild } = require('../database/config/build');
const getData = require('../database/queries/getData');
const postData = require('../database/queries/postData');
const deleteData = require('../database/queries/deleteData');

beforeEach(() => {
  dbBuild();
});

test('get book', () => {
  const id = '1';
  const name = 'book1';
  const release_date = '2/2/2020';
  const author_id = 'author1';
  return getData()
    .then((data) => {
      expect(data.rows.length).toBe(3);
      expect(data.rows[0].id).toBe(1);
      expect(data.rows[0].book).toBe('book1');
    });
});

test('delete book', () => {
  deleteData()
    .then((data) => {
      expect(data.rows[0].toEqual(undefined));
    });
});

test('add book', () => {
  const id = '30';
  const name = 'book30';
  const release_date = '2/2/2020';
  const author_id = '1';
  return postData(name, release_date, author_id)
    .then((data) => {
      expect(data.rows[0]).toEqual({
        id: '30', name: 'book30', release_date: '2/2/2020', author_id: '1',
      });
    });
});

afterAll(() => connection.end());
