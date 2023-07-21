
// rating
const cars = [
  { name: "Car A", base_rating: 8.0, times_selected: 0 },
  { name: "Car B", base_rating: 8.5, times_selected: 0 },
  // use csv
];

function chooseCar() {
  const car1Index = Math.floor(Math.random() * cars.length);
  let car2Index = Math.floor(Math.random() * cars.length);

  // Ensure the second car is different from the first one
  while (car2Index === car1Index) {
    car2Index = Math.floor(Math.random() * cars.length);
  }

  const car1 = cars[car1Index];
  const car2 = cars[car2Index];

  const car1Button = document.getElementById("car1");
  const car2Button = document.getElementById("car2");

  car1Button.onclick = function () {
    car1.times_selected++;
    updateRatings(car1, car2);
  };

  car2Button.onclick = function () {
    car2.times_selected++;
    updateRatings(car2, car1);
  };
}

function updateRatings(selectedCar, unselectedCar) {
  const updatePercentage = 0.01;
  selectedCar.rating =
    selectedCar.base_rating + selectedCar.times_selected * updatePercentage;
  unselectedCar.rating =
    unselectedCar.base_rating - unselectedCar.times_selected * updatePercentage;
  displayResult();
}

function displayResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const winner = cars.reduce((prev, curr) =>
    prev.rating > curr.rating ? prev : curr
  );

  const winnerElement = document.createElement("h2");
  winnerElement.innerText = `The best car is ${
    winner.name
  } with a rating of ${winner.rating.toFixed(2)}!`;
  resultDiv.appendChild(winnerElement);
}

// Game loop for 20 turns
for (let turn = 1; turn <= 20; turn++) {
  const turnHeader = document.createElement("h3");
  turnHeader.innerText = `Turn ${turn}`;
  chooseCar();
}
