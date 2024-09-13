document.getElementById('convert-button').addEventListener('click', convertCurrency);

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const crypto = document.getElementById('crypto').value;

    if (!amount) {
        alert('Please enter an amount.');
        return;
    }

    try {
        // Fetch current price of selected cryptocurrency in USD
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
        const data = await response.json();
        const rate = data[crypto].usd;

        // Calculate the conversion
        const convertedAmount = (amount / rate).toFixed(6);

        // Display the result
        document.getElementById('result').innerText = `${amount} USD = ${convertedAmount} ${crypto.toUpperCase()}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'Error fetching data.';
    }
}
