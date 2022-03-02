const book = document.querySelector('.books');

fetch('/books')
  .then((res) => res.json()
    .then((data) => {
      data.forEach((element) => {
        console.log(element);
        const div = document.createElement('div');
        const bookName = document.createElement('span');
        const authorName = document.createElement('span');
        const date = document.createElement('span');
        bookName.textContent = element.book;
        authorName.textContent = element.author;
        date.textContent = element.date;
        div.appendChild(bookName);
        div.appendChild(authorName);
        div.appendChild(date);
        book.appendChild(div);
      });
    }));
