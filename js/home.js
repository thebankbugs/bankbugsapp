document.addEventListener('DOMContentLoaded', () => {
    const claimButton = document.getElementById('claim-btn');

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
                    `Hello Chief! I just registered and funded my account under your partner broker. My Broker Account ID is: ${accountID}. Please verify me and add me to the VIP Signals WhatsApp Group!`
                );
                
                // Open the WhatsApp click-to-chat API interface
                window.open(`https://wa.me{67576766296}?text=${messageText}`, '_blank');
            } else if (accountID !== null) {
                alert("Please enter a VALID XM Trading Account ID to claim your free VIP trading signals.");
            }
        });
    }
});
