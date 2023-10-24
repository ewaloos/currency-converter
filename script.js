{
  const calculateResult = (amount, currency) => {
    const rateUSD = 4.22;
    const rateEUR = 4.47;
    const rateGBP = 5.13;

    switch (currency) {
      case "USD":
        return amount / rateUSD;

      case "EUR":
        return amount / rateEUR;

      case "GBP":
        return amount / rateGBP;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);
    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
