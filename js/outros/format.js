var numberToCurrency = (value, locales, currency, options) =>
  value.toLocaleString(locales, {
    style: "currency",
    currency,
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });

var formatCurrency = (value, countryCode) => {
  switch (countryCode.toUpperCase()) {
    case "CO":
      return numberToCurrency(value, "es-co", "COP");
    case "CL":
      return numberToCurrency(value, "es-cl", "CLP");
    case "PE":
      return numberToCurrency(value, "es-pe", "PEN");
    case "BR":
      return numberToCurrency(value, "pt-br", "BRL");
    default:
      return numberToCurrency(value, "en-us", "USD");
  }
};

var formatDate = (date, countryCode) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  switch (countryCode.toUpperCase()) {
    case "CO":
      return date.toLocaleDateString("es-co", options);
    case "CL":
      return date.toLocaleDateString("es-cl", options);
    case "PE":
      return date.toLocaleDateString("es-pe", options);
    case "BR":
      return date.toLocaleDateString("pt-br", options);
    default:
      return date.toLocaleDateString("en-us", options);
  }
};

var test = () => {
  var date = new Date("2023-09-08 00:00:00");
  var value1 = 24030.45;
  var value2 = 234;
  var value3 = 0.45;
  ["CO", "CL", "PE"].forEach((countryCode) => {
    console.log(`Country: ${countryCode}`);
    console.log(
      `Original ${date.toISOString()}, formatted: ${formatDate(
        date,
        countryCode
      )}`
    );
    console.log(
      `Original ${value1}, formatted: ${formatCurrency(value1, countryCode)}`
    );
    console.log(
      `Original ${value2}, formatted: ${formatCurrency(value2, countryCode)}`
    );
    console.log(
      `Original ${value3}, formatted: ${formatCurrency(value3, countryCode)}`
    );
    console.log(" ---")
  });
};

test();
