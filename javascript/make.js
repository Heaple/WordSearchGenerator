import * as settings from "./select.js";

const letter = document.querySelector(".letter");
let added = false
let i;
let j;

function createSheet() {
    if (added == false) {
        for (i = 0; i <= settings.height; i++) {
            let nowLine = document.createElement("div");
            nowLine.id = toString(i)+"line"
            letter.appendChild(nowLine);
            for (j = 0; j <= settings.width; j++) {
                let nowColumn = document.createElement("input");
                nowColumn.type = "text";
                nowColumn.id = toString(j)+"column";
                nowColumn.style = "width:5px;height:5px;font-size:3px;";
                nowLine.appendChild(nowColumn);
            }
        }
    }
}

window.onload = createSheet();