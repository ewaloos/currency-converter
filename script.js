let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let rateUSD = 4.37;
let rateEUR = 4.62;
let rateGBP = 5.33;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let currency = currencyElement.value;

  switch (currency) {
    case "USD":
      result = amount / rateUSD;
      break;
    case "EUR":
      result = amount / rateEUR;
      break;
    case "GBP":
      result = amount / rateGBP;
      break;
  }

  resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
