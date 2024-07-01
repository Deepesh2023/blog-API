const invalidUrl = (request, response) => {
  response.status(404).send("<h1>Page not found</h1>");
};

module.exports = {
  invalidUrl,
};
