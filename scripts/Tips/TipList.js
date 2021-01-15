import {useTips} from "./TipDataProvider.js";
import {Tips} from "./Tips.js";

let tipContainer = document.querySelector("#tips-section");

export function TipsList(){
    const allTheTips = useTips();


let tipsListHTMLString = "";

for (let i=0; i<allTheTips.length; i++) {
    tipsListHTMLString += Tips(allTheTips[i]);
}

console.log(tipsListHTMLString);

tipContainer.innerHTML = `<h2>Fish Tips</h2>${tipsListHTMLString}`;

}