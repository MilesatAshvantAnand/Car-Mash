 
zeroSixty1 = "3.2";
zeroSixty2 = "1.2";

TS1 = "230mph";
TS2 = "270mph";

HP1 = "920hp";
HP2 = "890hp";


linkCar1 =
  "https://cdn.ferrari.com/cms/network/media/img/resize/5d961f5c21a83177ad6ea93d-ferrari-laferrari-2013-carbanner-desktop?height=750";

linkCar2 =
  "https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/22e70458-58ae-4053-81af-6c2332da6851.jpg?v=131";


function insertCar1Image() {
  const car1ImageContainer = document.getElementById("car1ImageContainer");
  const car1Image = document.createElement("img");
  car1Image.src = linkCar1;
  car1Image.alt = "ferrari-la-ferrari";
  car1Image.className = "img1";
  car1ImageContainer.appendChild(car1Image);
}

function insertCar2Image() {
  const car2ImageContainer = document.getElementById("car2ImageConatiner");
  const car2Image = document.createElement("img");
  car2Image.src = linkCar2;
  car2Image.alt = "ferrari-enzo";
  car2Image.className = "img2";
  car2ImageContainer.appendChild(car2Image);
}

const zs1 = document.getElementById("0-60-1");
zs1.textContent = zeroSixty1;
const zs2 = document.getElementById("0-60-2");
zs2.textContent = zeroSixty2;
const ts1 = document.getElementById("TS-1");
ts1.textContent = TS1;
const ts2 = document.getElementById("TS-2");
ts2.textContent = TS2;
const hp1 = document.getElementById("HP-1");
hp1.textContent = HP1;
const hp2 = document.getElementById("HP-2");
hp2.textContent = HP2;
insertCar1Image();
insertCar2Image();
