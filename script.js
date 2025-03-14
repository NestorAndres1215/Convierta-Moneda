// Tasas de cambio (actualizadas a fecha de marzo 2025)
// Estas tasas son relativas al dólar estadounidense (USD)
const exchangeRates = {
    USD: 1.00,    // Dólar estadounidense (base)
    PEN: 3.78,    // Sol peruano
    ARS: 1050.50, // Peso argentino 
    MXN: 19.20,   // Peso mexicano
    CLP: 950.20,  // Peso chileno
    COP: 3850.75, // Peso colombiano
    BRL: 5.25,    // Real brasileño
    VES: 36.80,   // Bolívar venezolano
    PYG: 7420.30, // Guaraní paraguayo
    EUR: 0.92,    // Euro
};

// Símbolos de moneda
const currencySymbols = {
    USD: '$',
    PEN: 'S/',
    ARS: 'ARS $',
    MXN: 'MXN $',
    CLP: 'CLP $',
    COP: 'COP $',
    BRL: 'R$',
    VES: 'Bs.',
    PYG: '₲',
    EUR: '€',
};

// Función para convertir moneda
function convertCurrency() {
    // Obtener valores del formulario
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');
    
    // Validar entrada
    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Por favor, ingresa una cantidad válida.';
        resultDiv.style.borderLeft = '5px solid #e74c3c';
        resultDiv.classList.add('result-visible');
        return;
    }
    
    // Realizar la conversión
    const valueInUSD = amount / exchangeRates[fromCurrency];
    const convertedAmount = valueInUSD * exchangeRates[toCurrency];
    
    // Format the result with commas for thousands
    const formattedOriginal = formatNumber(amount);
    const formattedConverted = formatNumber(convertedAmount);
    
    // Mostrar el resultado
    resultDiv.innerHTML = `
        <div>
            <span class="currency-symbol">${currencySymbols[fromCurrency]}</span> ${formattedOriginal} ${fromCurrency} =
        </div>
        <div style="font-size: 1.5rem; margin-top: 10px;">
            <span class="currency-symbol">${currencySymbols[toCurrency]}</span> ${formattedConverted} ${toCurrency}
        </div>
    `;
    resultDiv.style.borderLeft = '5px solid #2ecc71';
    resultDiv.classList.add('result-visible');
    
    // Animación para el resultado
    resultDiv.style.opacity = '0';
    setTimeout(() => {
        resultDiv.style.opacity = '1';
    }, 10);
}

// Función para dar formato a números
function formatNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Inicializar elementos cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    // Configurar el botón de intercambio
    document.getElementById('swap-button').addEventListener('click', function() {
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');
        
        // Guardar los valores actuales
        const tempValue = fromCurrency.value;
        
        // Intercambiar los valores
        fromCurrency.value = toCurrency.value;
        toCurrency.value = tempValue;
        
        // Si hay un resultado previo, volver a hacer la conversión
        const resultDiv = document.getElementById('result');
        if (resultDiv.classList.contains('result-visible')) {
            convertCurrency();
        }
        
        // Animación para el botón
        this.classList.add('rotate-animation');
        setTimeout(() => {
            this.classList.remove('rotate-animation');
        }, 500);
    });
    
    // Permitir que la tecla Enter active la conversión
    document.getElementById('amount').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            convertCurrency();
        }
    });
    
    // Inicializar el resultado como oculto
    document.getElementById('result').classList.remove('result-visible');
});

// Función para actualizar las tasas de cambio (simulación)
function updateExchangeRates() {
    // Aquí se podría implementar una llamada a una API real de tasas de cambio
    console.log("Tasas de cambio actualizadas");
    
    // Actualizar la fecha de última actualización
    const date = new Date();
    document.querySelector('.last-update').innerHTML = 
        `<i class="fas fa-clock"></i> Última actualización: ${date.toLocaleDateString()}`;
}

// Opcional: Actualizar tasas en intervalos (simulación)
// setInterval(updateExchangeRates, 3600000); // Actualizar cada hora