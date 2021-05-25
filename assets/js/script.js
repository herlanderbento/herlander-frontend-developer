(function readyJS(win, doc) {
    // create functions to select elements

    const selectElement = (element) => document.querySelector(element);

    let header = selectElement('header');
    let body = selectElement('body');

    window.onscroll = () => {
        scrolling()
    }

    let scrolling = () => {
        if (body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    }


})(window, document)