const book = document.querySelector('.books');

const deletebook = (id) => fetch(`/delete-book/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
});

fetch('/books')
  .then((res) => res.json()
    .then((data) => {
      data.forEach((element) => {
        const div = document.createElement('div');
        const bookName = document.createElement('span');
        const authorName = document.createElement('span');
        const date = document.createElement('span');
        const btn = document.createElement('button');
        btn.className = 'remove-btn btn';
        div.className = 'card';
        btn.onclick = (e) => {
          deletebook(element.id)
            .then(() => {
              window.location = '/';
            });
        };
        bookName.textContent = element.book;
        authorName.textContent = element.author;
        date.textContent = element.date;
        btn.textContent = 'delete';
        div.appendChild(bookName);
        div.appendChild(authorName);
        div.appendChild(date);
        div.appendChild(btn);
        book.appendChild(div);
      });
    }));
