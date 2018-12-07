const textContainer = document.querySelector('.information-container__text-container');
const showButton = document.querySelector('.information__show-more');

const SHOW_MORE = 'SHOW MORE';
const SHOW_LESS = 'SHOW LESS';

const MAX_HEIGHT_WITH_HIDDEN  = 80;

if(textContainer.clientHeight >= MAX_HEIGHT_WITH_HIDDEN) {
    showButton.style.display = 'block';
    textContainer.classList.add("info-text_shadow");
    textContainer.setAttribute("style", `height: ${MAX_HEIGHT_WITH_HIDDEN}px;`);
}

showButton.addEventListener('click', () => {
    if(showButton.innerHTML === SHOW_MORE) {
        textContainer.classList.remove("info-text_shadow");
        textContainer.setAttribute("style", `height: ${textContainer.scrollHeight}px;`)
        showButton.innerHTML = SHOW_LESS;
    } else if(showButton.innerHTML === SHOW_LESS) {
        textContainer.classList.add("info-text_shadow");
        textContainer.setAttribute("style", `height: ${MAX_HEIGHT_WITH_HIDDEN}px;`)
        showButton.innerHTML = SHOW_MORE;
    }
});

