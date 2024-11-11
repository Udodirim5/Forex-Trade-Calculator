function calculateProfitLoss() {
    // Get user inputs
    const lotSize = parseFloat(document.getElementById('lotSize').value);
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);
    const takeProfit = parseFloat(document.getElementById('takeProfit').value);

    // Calculate potential profit/loss
    const pipValue = 10; // Typical pip value for standard lots in Forex
    const slDifference = entryPrice - stopLoss;
    const tpDifference = takeProfit - entryPrice;

    const potentialLoss = slDifference * pipValue * lotSize;
    const potentialProfit = tpDifference * pipValue * lotSize;

    // Display results
    document.getElementById('result').innerHTML = `
    <div>
    <h3>Results:</h3>
    <p>Potential Loss: $${potentialLoss.toFixed(2)}</p>
    <p>Potential Profit: $${potentialProfit.toFixed(2)}</p>
    </div>
    `;
}
