import { isInsideCircle } from "./location-circle.js";
import locationsArray from "./init-locations.js";

// let device, location;
let colorElement = document.getElementById("status1");
let colorElement1 = document.getElementById("status");

let currentlat,
  currentlon,
  error = true;
let targetLoc = null;

function main() {
  console.log("Page is fully loaded");
}

window.addEventListener("load", main);
colorElement.addEventListener("click", onClickSquareBox2);
colorElement.addEventListener("touch", onClickSquareBox2);
colorElement1.addEventListener("click", onClickSquareBox1);
colorElement1.addEventListener("touch", onClickSquareBox1);