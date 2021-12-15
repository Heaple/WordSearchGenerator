const startButton = document.querySelector("#start-button");
const activeclass = "active";

function handlestartBtnMouseEnter() {
    startButton.classList.add(activeclass);

}

function handlestartBtnMouseLeave() {
    startButton.classList.remove(activeclass);
}

function handleStartBtnClick() {
    window.location.href = "making_word_search/making_word_search.html";
}

startButton.addEventListener("mouseenter", handlestartBtnMouseEnter);
startButton.addEventListener("mouseleave", handlestartBtnMouseLeave);
startButton.addEventListener("click", handleStartBtnClick);