let width_textbox = document.querySelector("#width");
let height_textbox = document.querySelector("#height");
let width = null;
let height = null;

const makebutton = document.getElementById("make-button");
const activeclass = "active";

function handleClickMakeBtn() {

    width = parseInt(width_textbox.value);
    height = parseInt(height_textbox.value);
    if (width > 30 || height > 30) {
        alert("Width and height cannot longer than 30!");
        width_textbox.value = "";
        height_textbox.value = "";

        } else if (width < 5 || height < 5) {
        alert("Width and height cannot shorter than 5!");
        width_textbox.value = "";
        height_textbox.value = "";

    } else if (isNaN(width) || isNaN(height)) {
        alert("Width and height must be number!");
        width_textbox.value = "";
        height_textbox.value = "";

    } else if (width == null || height == null) {
        alert("You have to enter width and height!");
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

export { width, height };

if (makebutton) {
    makebutton.addEventListener("mouseenter", handleMakeBtnMouseEnter);
    makebutton.addEventListener("mouseleave", handleMakeBtnMouseLeave);
    makebutton.addEventListener("click", handleClickMakeBtn);
}
