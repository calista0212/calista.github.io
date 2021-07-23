/*Add your JavaScript here*/

function getHouse() {

  const houses = new Array(
    "Griffindor - Congratualations!!!",
    "Griffindor - Best Wishes!!!",
    "Slytherin - Congratualations!!!",
    "Slytherin - Best Wishes!!!",
    "Ravenclaw  - Congratualations!!!",
    "Ravenclaw  - Best Wishes!!!",
    "Ravenclaw  - Congratualations!!!",
    "Ravenclaw  - Best Wishes!!!");

  let house = Math.floor(Math.random() * 8);
  let value = houses[house];

  const rbsCake = document.querySelectorAll('input[name="cake"]');
  const rbsLayers = document.querySelectorAll('input[name="layers"]');
  const rbsFrosting = document.querySelectorAll('input[name="frosting"]');
  const rbsTopping = document.querySelectorAll('input[name="topping"]');
  const rbsLastly = document.querySelectorAll('input[name="lastly"]');

  let selectedValueCake;
  let selectedValueLayers;
  let selectedValueFrosting;
  let selectedValueTopping;
  let selectedValueLastly;

  for (const rb of rbsCake) {
    if (rb.checked) {
      selectedValueCake = rb.value;
      break;
    }
  }

  for (const rb of rbsLayers) {
    if (rb.checked) {
      selectedValueLayers = rb.value;
      break;
    }
  }


  for (const rb of rbsFrosting) {
    if (rb.checked) {
      selectedValueFrosting = rb.value;
      break;
    }
  }

  for (const rb of rbsTopping) {
    if (rb.checked) {
      selectedValueTopping = rb.value;
      break;
    }
  }

  for (const rb of rbsLastly) {
    if (rb.checked) {
      selectedValueLastly = rb.value;
      break;
    }
  }

  if (selectedValueCake && selectedValueLayers && selectedValueFrosting && selectedValueTopping && selectedValueLastly) {
    const element = document.getElementById("result");
    element.innerHTML = "Your result is... " + value + "!";
  }
}

function resetButton() {

  Array.from(document.querySelectorAll('input[name="cake"]:checked'), input => input.checked = false);
  Array.from(document.querySelectorAll('input[name="layers"]:checked'), input => input.checked = false);
  Array.from(document.querySelectorAll('input[name="frosting"]:checked'), input => input.checked = false);
  Array.from(document.querySelectorAll('input[name="topping"]:checked'), input => input.checked = false);
  Array.from(document.querySelectorAll('input[name="lastly"]:checked'), input => input.checked = false);

  const element = document.getElementById("result");
  element.innerHTML = "Your result is... ";
}
