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

async function onClickSquareBox1() {
    $.ajax({
      type: "GET",
      url: "/location/findRandom",
      success: function (coord) {
        targetLoc = coord;
        document.getElementById("targetloc").innerHTML =
          "The treasure location is ready..! ";
        document.getElementById("lbl").innerHTML = " Start playing the game.";
        let utterance = new SpeechSynthesisUtterance(
          `The treasure location is ready start playing the game.`
        );
        speechSynthesis.speak(utterance);
        document.getElementById("device-lat").innerHTML =
          targetLoc.locationLatitude;
        document.getElementById("device-long").innerHTML =
          targetLoc.locationLongitude;
      },
    });
  }
  async function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then((position) => {
      return position;
    });
  }
  
  async function onClickSquareBox2() {
    if (!targetLoc) return;
    const locText = await getLocation();
  
    [currentlat, currentlon] = [
      locText.coords.latitude,
      locText.coords.longitude,
    ];
  
    // Uncomment to test
    //   [currentlat, currentlon] = [40.3515, -94.8826];
  
    document.getElementById("error-message").innerHTML = "";
    document.getElementById("location").innerHTML = "";
    document.getElementById("device-lat").innerHTML = `Your location: `;
    document.getElementById("device-long").innerHTML = `(${currentlat.toFixed(
      5
    )}, ${currentlon.toFixed(5)})`;  