const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for (let i = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener('click', changeSize);
}

function changeSize(event) {
    event.preventDefault();

    for (let i = 0; i < fontSizes.length; i++) {
        fontSizes[i].classList.remove('font-size_active');
    }

    this.classList.add('font-size_active');

    book.className = 'book';

    if (this.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
    } else if (this.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
    }
}
