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
          " ";
        document.getElementById("device-long").innerHTML =
          " ";
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
      6
    )}, ${currentlon.toFixed(6)})`;
    
    if (isInside(targetLoc.locationLatitude, targetLoc.locationLongitude)) {
        const successMessage = `Congratulations!, You found location ${targetLoc.locationName}`;
        document.getElementById("location").innerHTML = successMessage;
        const utterance = new SpeechSynthesisUtterance(successMessage);
        speechSynthesis.speak(utterance);
    
        //Show a success notification for 2 seconds
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: successMessage,
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const directions = directionsTowardsQuest(currentlat, currentlon);
        const message = `Sorry,You're not near to the treasure. Please head ${
          directions.length > 1
            ? `${directions[0]} ${directions[1]}`
            : directions[0]
        }.`;
    
        document.getElementById("error-message").innerHTML = message;
        const utterance = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(utterance);
      }
    }
    
    //Detect if the current location is inside a bounding box
    function isInside(questLat, questLon) {
      return distanceBetweenLocations(questLat, questLon) < 30 ? true : false;
    }
    
    //Calculate the directions in which the player is required to move to reach the selected quest
    function directionsTowardsQuest(currentLatitude, currentLongitude) {
      const questLatitude = targetLoc.locationLatitude;
      const questLongitude = targetLoc.locationLongitude;
      let directionsArray = [];
    
      if (currentLatitude > questLatitude) directionsArray.push("South");
      else directionsArray.push("North");
    
      if (currentLongitude < questLongitude) directionsArray.push("East");
      else directionsArray.push("West");
    
      return directionsArray;
    }
    
    //Measue the distance between two coordinates by haversine formula
    function distanceBetweenLocations(questLat, questLon) {
      const R = 6371e3;
      const φ1 = (currentlat * Math.PI) / 180;
      const φ2 = (questLat * Math.PI) / 180;
      const Δφ = ((questLat - currentlat) * Math.PI) / 180;
      const Δλ = ((questLon - currentlon) * Math.PI) / 180;
    
      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
      const d = R * c;
      return d;
    }