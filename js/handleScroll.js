export const handleScroll = (currentPage, itemsPerPage, loadProducts) => {
  const pageBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

  if (pageBottom) {
    currentPage++;
    loadProducts(currentPage, itemsPerPage);
  }

  return currentPage;
};
