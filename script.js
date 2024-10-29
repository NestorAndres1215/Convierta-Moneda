function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Nombres completos de las monedas
    const currencyNames = {
        "PEN": "Soles",
        "USD": "Dólares Estadounidenses",
        "ARS": "Pesos Argentinos",
        "MXN": "Pesos Mexicanos",
        "CLP": "Pesos Chilenos",
        "COP": "Pesos Colombianos",
        "BRL": "Reales Brasileños",
        "VES": "Bolívares Venezolanos",
        "PYG": "Guaraníes Paraguayos",
        "EUR": "Euros"
    };

    // Tasas de cambio ficticias para monedas latinoamericanas
    const exchangeRates = {
        "PEN": { "USD": 0.27, "ARS": 25.85, "MXN": 5.00, "CLP": 220.00, "COP": 1050.00, "BRL": 1.30, "VES": 6.30, "PYG": 3850.00, "EUR": 0.23 },
        "USD": { "PEN": 3.70, "ARS": 95.00, "MXN": 19.00, "CLP": 830.00, "COP": 3900.00, "BRL": 5.20, "VES": 32.00, "PYG": 7100.00, "EUR": 0.85 },
        "ARS": { "PEN": 0.038, "USD": 0.011, "MXN": 0.20, "CLP": 8.75, "COP": 40.00, "BRL": 0.055, "VES": 0.35, "PYG": 75.00, "EUR": 0.009 },
        "MXN": { "PEN": 0.20, "USD": 0.053, "ARS": 5.00, "CLP": 43.50, "COP": 200.00, "BRL": 0.27, "VES": 1.70, "PYG": 375.00, "EUR": 0.045 },
        "CLP": { "PEN": 0.0045, "USD": 0.0012, "ARS": 0.11, "MXN": 0.023, "COP": 4.50, "BRL": 0.0062, "VES": 0.04, "PYG": 8.60, "EUR": 0.001 },
        "COP": { "PEN": 0.001, "USD": 0.00026, "ARS": 0.025, "MXN": 0.005, "CLP": 0.22, "BRL": 0.0014, "VES": 0.008, "PYG": 1.90, "EUR": 0.00022 },
        "BRL": { "PEN": 0.77, "USD": 0.19, "ARS": 18.00, "MXN": 3.70, "CLP": 160.00, "COP": 710.00, "VES": 6.20, "PYG": 1385.00, "EUR": 0.18 },
        "VES": { "PEN": 0.16, "USD": 0.031, "ARS": 2.80, "MXN": 0.59, "CLP": 26.00, "COP": 120.00, "BRL": 0.16, "PYG": 223.00, "EUR": 0.016 },
        "PYG": { "PEN": 0.00026, "USD": 0.00014, "ARS": 0.013, "MXN": 0.0027, "CLP": 0.12, "COP": 0.53, "BRL": 0.00072, "VES": 0.0045, "EUR": 0.00014 },
        "EUR": { "PEN": 4.30, "USD": 1.17, "ARS": 120.00, "MXN": 22.00, "CLP": 950.00, "COP": 4550.00, "BRL": 5.50, "VES": 32.00, "PYG": 8050.00 }
    };

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Por favor, ingresa una cantidad válida.";
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = `El tipo de cambio es 1:1. ${amount} ${currencyNames[fromCurrency]} son ${amount} ${currencyNames[toCurrency]}.`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById("result").innerText = `${amount} ${currencyNames[fromCurrency]} son ${convertedAmount} ${currencyNames[toCurrency]}.`;
}
