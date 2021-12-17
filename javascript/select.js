let width_textbox = document.querySelector("#width");
let height_textbox = document.querySelector("#height");
let wordCount_textbox = document.querySelector("#word-count")

let width;
let height;
let wordCount;

const makebutton = document.getElementById("make-button");
const activeclass = "active";

function handleClickMakeBtn() {

    width = parseInt(width_textbox.value);
    height = parseInt(height_textbox.value);
    wordCount = parseInt(wordCount_textbox.value)

    if (width > 30 || height > 30) {
        alert("Width and height cannot longer than 30.");
        width_textbox.value = "";
        height_textbox.value = "";

    } else if (width < 5 || height < 5) {
        alert("Width and height cannot shorter than 5.");
        width_textbox.value = "";
        height_textbox.value = "";

    } else if (isNaN(width) || isNaN(height)) {
        alert("Width and height must be number.");
        width_textbox.value = "";
        height_textbox.value = "";

    } else if (wordCount < 1) {
        wordCount_textbox.value = "";
        alert("Number of words must more than 0.");

    } else if (width == null || height == null) {
        wordCount_textbox.value = "";
        alert("You have to enter width and height.");

    }  else if (wordCount > 30) {
        wordCount_textbox.value = "";
        alert("Number of words must less than 31.");

    } else if (wordCount == null) {
        alert("You have to enter number of words.");

    } else if (isNaN(wordCount)) {
        wordCount_textbox.value = "";
        alert("Number of words must be number.")
    }
    else {
        window.location.href = "/html/make.html";
    }
}

function handleMakeBtnMouseEnter() {
    makebutton.classList.add(activeclass);
}

function handleMakeBtnMouseLeave() {
    makebutton.classList.remove(activeclass);
}

export { width, height, wordCount };

if (makebutton) {
    makebutton.addEventListener("mouseenter", handleMakeBtnMouseEnter);
    makebutton.addEventListener("mouseleave", handleMakeBtnMouseLeave);
    makebutton.addEventListener("click", handleClickMakeBtn);
}
