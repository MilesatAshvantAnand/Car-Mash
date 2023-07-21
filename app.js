import "script"
  zeroSixty1 = "3.2"
  zeroSixty2 = "1.2"

  TS1 = "230mph"
  TS2 = "270mph"

  HP1 = "920hp"
  HP2 = "890hp"

  name1 = "ferrari la ferrari"
  name2 = "ferrari enzo"

  rank1 = "152"
  rank2 = "122"


linkCar1 =
  "https://cdn.ferrari.com/cms/network/media/img/resize/5d961f5c21a83177ad6ea93d-ferrari-laferrari-2013-carbanner-desktop?height=750";

linkCar2 =
  "https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/22e70458-58ae-4053-81af-6c2332da6851.jpg?v=131";


// to be removed

function insertCar1Image() {
  const car1ImageContainer = document.getElementById("car1ImageContainer");
  const car1Image = document.createElement("img");
  car1Image.src = linkCar1;
  car1Image.alt = "ferrari-la-ferrari";
  car1Image.className = "img1"
  car1ImageContainer.appendChild(car1Image);
}

function insertCar2Image() {
  const car2ImageContainer = document.getElementById("car2ImageConatiner");
  const car2Image = document.createElement("img");
  car2Image.src = linkCar2;
  car2Image.alt = "ferrari-enzo";
  car2Image.className = "img2"
  car2ImageContainer.appendChild(car2Image);
}


document.getElementById('0-60-1').innerHTML = zeroSixty1
document.getElementById('0-60-2').innerHTML = zeroSixty2


document.getElementById('TS-1').innerHTML = TS1
document.getElementById('TS-2').innerHTML = TS2

document.getElementById('HP-1').innerHTML = HP1
document.getElementById('HP-2').innerHTML = HP2

document.getElementById('Name-1').innerHTML = Name1
document.getElementById('Name-2').innerHTML = Name2

document.getElementById('rank-1').innerHTML = Rank1
document.getElementById('rank-2').innerHTML = Rank2

insertCar1Image();
insertCar2Image();


