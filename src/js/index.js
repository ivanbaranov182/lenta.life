// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__mobile').classList.toggle('active');
});
