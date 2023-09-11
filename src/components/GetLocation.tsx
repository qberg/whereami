import { useState } from "react";

export default function GetGps () {
  const [position, setPosition] = useState([-1,-1]);
  const [prompt, setPrompt] = useState("");

  function success (location: any) {
    const latitude: number = location.coords.latitude;
    const longitude: number = location.coords.longitude;
    setPosition([latitude, longitude])
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error () {
    setPrompt("Please allow location access!!!")
    console.log("Unable to retrieve your location");
  }

  function handleClick () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    else {
      console.log("Geolocation not supported");
    }
  }

  return (
  <div>
    <button onClick={handleClick}>
      Get GPS
    </button>
    <div>
        {position[0]},{position[1]}
    </div>
    <div>
        {prompt}
    </div>
  </div>)
}
