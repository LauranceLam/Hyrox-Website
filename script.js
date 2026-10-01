document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const brand = document.querySelector('.brand');

  if (brand) {
    brand.title = `Hyrox ${year}`;
  }
});
