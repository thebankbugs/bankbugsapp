document.addEventListener('DOMContentLoaded', () => {
    const claimButton = document.getElementById('claim-btn');

   // Inside your existing document.addEventListener('DOMContentLoaded', () => { ... })

const balanceInput = document.getElementById('account-balance');
const riskInput = document.getElementById('risk-percentage');
const stopLossInput = document.getElementById('stop-loss');

const riskAmountDisplay = document.getElementById('risk-amount');
const lotSizeDisplay = document.getElementById('lot-size');

function calculatePosition() {
    const balance = parseFloat(balanceInput.value) || 0;
    const riskPercent = parseFloat(riskInput.value) || 0;
    const stopLoss = parseFloat(stopLossInput.value) || 0;

    if (balance <= 0 || riskPercent <= 0 || stopLoss <= 0) {
        riskAmountDisplay.textContent = "$0.00";
        lotSizeDisplay.textContent = "0.00 Lots";
        return;
    }

    // 1. Calculate exactly how many cash dollars are being risked
    const cashRisked = balance * (riskPercent / 100);
    
    // 2. Calculate standard lot metrics ($10 per pip per 1 standard lot)
    const pipValueStandardLot = 10; 
    const recommendedLots = cashRisked / (stopLoss * pipValueStandardLot);

    // 3. Render clean output modifications back to the interface
    riskAmountDisplay.textContent = `$${cashRisked.toFixed(2)}`;
    lotSizeDisplay.textContent = `${recommendedLots.toFixed(2)} Standard Lots`;
}

// Attach listeners so it updates instantly as the user types or clicks arrows
if (balanceInput && riskInput && stopLossInput) {
    [balanceInput, riskInput, stopLossInput].forEach(input => {
        input.addEventListener('input', calculatePosition);
    });
}

    // Replace this with your actual WhatsApp phone number (include your country code!)
    // For PNG, the country code is 675. Do not include spaces or "+" symbols.
    const yourWhatsAppNumber = "67570000000"; 

    if (claimButton) {
        claimButton.addEventListener('click', () => {
            // Prompt the trader for their funded broker ID
            const accountID = prompt("Please enter your XM Broker Account ID to verify your VIP status:");
            
            if (accountID && accountID.trim() !== "") {
                alert(`Account ID (${accountID}) saved! Opening WhatsApp to instantly send your verification message to our team...`);
                
                // Formulate a clean pre-written text message for the user
                const messageText = encodeURIComponent(
                    `Hello Otto! I just registered my account under your Partner Broker. My XM Account ID is: ${accountID}. Please verify me and give access to the trading Models & VIP WhatsApp Group!`
                );
                
                // Open the WhatsApp click-to-chat API interface
                window.open(`https://wa.me/67576766296?text=${messageText}`, '_blank');
            } else if (accountID !== null) {
                alert("Please enter a VALID XM Trading Account ID to Access all tools and VIP Whatsapp.");
            }
        });
    }
});
