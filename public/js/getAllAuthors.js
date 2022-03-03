const author = document.querySelector('.select');

fetch('/authors')
  .then((res) => {
    res.json()
      .then((data) => {
        data.forEach((element) => {
          const authorName = document.createElement('option');
          authorName.value = element.id;
          authorName.textContent = element.name;

          author.appendChild(authorName);
        });
      });
  });
