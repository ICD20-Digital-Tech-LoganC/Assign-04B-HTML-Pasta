// Function to calculate the total price of the pasta order
function pastaOrder() {

  // Get the selected pasta type
  const pastaType = document.getElementById("pastaType");

  // Create variables for the sizes of the pasta
  let nopasta = document.getElementById("No_pasta");
  let smallpasta = document.getElementById("Small_Pasta");
  let mediumpasta = document.getElementById("Medium_Pasta");
  let childpasta = document.getElementById("Child_Pasta");
  let largepasta = document.getElementById("Large_Pasta");
  let familypasta = document.getElementById("Family_Pasta");

  // Create variables for the toppings
  let toppingPrice;
  let notopping = document.getElementById("topping0");
  let chickfila = document.getElementById("topping1");
  let meatballs = document.getElementById("topping2");
  let turkey = document.getElementById("topping3");
  let chicken = document.getElementById("topping4");
  let feta = document.getElementById("topping5");
  let reggioparmigiano = document.getElementById("topping6");
  let mozzarella = document.getElementById("topping7");
  let redpepperflakes = document.getElementById("topping8");
  let basil = document.getElementById("topping9");
  let rosemary = document.getElementById("topping10");
  let oregano = document.getElementById("topping11");
  let pestosauce = document.getElementById("topping12");
  let marinara = document.getElementById("topping13");

  // Get the selected sides for the pasta
  const selectedSides = document.querySelectorAll('input[type="checkbox"]:checked');

  // Create variables for the sides
  let sidesPrice
  let noside = document.getElementById("side0");
  let salad = document.getElementById("side1");
  let coke = document.getElementById("side2");
  let pepsi = document.getElementById("side3");
  let water = document.getElementById("side4");
  let milk = document.getElementById("side5");
  let icedtea = document.getElementById("side6");

  let pastaPrice;
  let pastaSize;

  // Set price for pasta based on selected size
  if (pastaSize == childpasta) {

    // Set pasta type based on selected pasta type
    pastaSize = childpasta

    // Set price
    pastaPrice = 3.75;

  } else if (pastaSize == smallpasta) {

    // Set pasta type based on selected pasta type
    pastaSize = smallpasta

    // Set price
    pastaPrice = 5.00;

  } else if (pastaSize == mediumpasta) {

    // Set pasta type based on selected pasta type
    pastaSize = mediumpasta

    // Set price
    pastaPrice = 7.00;

  } else if (pastaSize == largepasta) {

    // Set pasta type based on selected pasta type
    pastaSize = largepasta

    // Set price
    pastaPrice = 9.50;

  } else if (pastaSize == familypasta) {

    // Set pasta type based on selected pasta type
    pastaSize = familypasta

    // Set price
    pastaPrice = 14.00;

  } else if (pastaSize == nopasta) {

    // Set pasta type based on selected pasta type
    pastaSize = nopasta

    // Set price
    pastaPrice = 0.00;

  }

  // Set price based on selected toppings
  // $1.00
  if (meatballs.checked == true) {
    toppingPrice + 1.00;
  }

  if (chicken.checked == true) {
    toppingPrice + 1.00;
  }

  if (chickfila.checked == true) {
    toppingPrice + 1.00;
  }

  if (turkey.checked == true) {
    toppingPrice + 1.00;
  }

  // $0.50
  if (reggioparmigiano.checked == true) {
    toppingPrice + 0.50;
  }

  if (mozzarella.checked == true) {
    toppingPrice + 0.50;
  }

  if (feta.checked == true) {
    toppingPrice + 0.50;
  }

  // $0.25
  if (rosemary.checked == true) {
    toppingPrice + 0.25;
  }

  if (redpepperflakes.checked == true) {
    toppingPrice + 0.25;
  }

  if (basil.checked == true) {
    toppingPrice + 0.25;
  }

  if (oregano.checked == true) {
    toppingPrice + 0.25;
  }

  // $0.00
  if (marinara.checked == true) {
    toppingPrice + 0.00;
  }

  if (pestosauce.checked == true) {
    toppingPrice + 0.00;
  }

  if (notopping.checked == true) {
    toppingPrice = 0.00;
  }

  // Set price based on selected sides
  // $3.00
  if (salad.checked == true) {
    sidesPrice + 1.00;
  }

  // $2.00
  if (pepsi.checked == true) {
    sidesPrice + 0.50;
  }

  if (coke.checked == true) {
    sidesPrice + 0.50;
  }

  // $1.00
  if (water.checked == true) {
    sidesPrice + 1.00;
  }

  if (milk.checked == true) {
    sidesPrice + 1.00;
  }

  if (icedtea.checked == true) {
    sidesPrice + 1.00;
  }

  // $0.00
  if (noside.checked == true) {
    sidesPrice = 0.00;
  }

  // Calculate subtotal
  const subtotal = pastaPrice + toppingPrice + sidesPrice;

  // Calculate tax (assuming 10% tax rate)
  const taxRate = 0.10;
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + tax;

  // Display receipt with 2 decimal places
  const receipt = "You ordered a " + pastaSize + " size " + pastaType + " pasta with " + selectedToppings.length + " toppings and " + selectedSides.length + " sides. The Subtotal is $" + subtotal.toFixed(2) + ", the HST is $" + tax.toFixed(2) + ", and the Total is $" + total.toFixed(2) + ".";

  document.getElementById("receipt").innerHTML = receipt;
}