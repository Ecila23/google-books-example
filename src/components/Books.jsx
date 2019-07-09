import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>{' '}
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail
              }
              alt='book cover'
            />
          </li>
        );
      })}
    </ul>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Books;
