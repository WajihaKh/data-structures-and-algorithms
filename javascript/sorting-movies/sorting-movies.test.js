const { sortByYear, sortByTitle } = require('./index.js');

describe('Sort Movies', () => {
  const movies = [
    { title: 'The Shawshank Redemption', year: 1994, genres: ['Drama'] },
    { title: 'The Godfather', year: 1972, genres: ['Crime', 'Drama'] },
    { title: 'The Dark Knight', year: 2008, genres: ['Action', 'Crime', 'Drama'] },
    { title: '12 Angry Men', year: 1957, genres: ['Drama'] },
    { title: 'Schindler\'s List', year: 1993, genres: ['Biography', 'Drama', 'History'] },
    { title: 'Pulp Fiction', year: 1994, genres: ['Crime', 'Drama'] },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003, genres: ['Adventure', 'Drama', 'Fantasy'] },
    { title: 'The Good, the Bad and the Ugly', year: 1966, genres: ['Western'] },
    { title: 'Fight Club', year: 1999, genres: ['Drama'] },
    { title: 'Forrest Gump', year: 1994, genres: ['Drama', 'Romance'] }
  ];

  test('sorts movies by most recent year first', () => {
    const sortedMovies = sortByYear([...movies]);
    expect(sortedMovies[0].year).toBe(2008);
    expect(sortedMovies[sortedMovies.length - 1].year).toBe(1957);
  });

  test('sorts movies alphabetically by title ignoring leading articles', () => {
    const sortedMovies = sortByTitle([...movies]);
    expect(sortedMovies[0].title).toBe('12 Angry Men');
    expect(sortedMovies[sortedMovies.length - 1].title).toBe('The Shawshank Redemption');
  });
});
