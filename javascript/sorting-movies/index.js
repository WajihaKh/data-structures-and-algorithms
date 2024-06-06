function stripLeadingArticles(title) {
  return title.replace(/^(A |An |The )/i, '').trim();
}

function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortByTitle(movies) {
  return movies.sort((a, b) => {
    const titleA = stripLeadingArticles(a.title);
    const titleB = stripLeadingArticles(b.title);
    return titleA.localeCompare(titleB);
  });
}

module.exports = { sortByYear, sortByTitle };
