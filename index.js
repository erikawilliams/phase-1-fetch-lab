let GOTBooks;

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  console.log('fetchBooks running')
  return fetch('https://anapioficeandfire.com/api/books')
  .then((resp)=>resp.json())
  .then((json)=> {
    GOTBooks = json
    renderBooks(GOTBooks)
    console.log(GOTBooks)
  })
}


function renderBooks(books) {
  console.log('renderBooks running')
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('domcontent loaded')
  fetchBooks();
});


