document.addEventListener('DOMContentLoaded', () => {
    // Selection Element References
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDashboard = document.getElementById('sidebar-dashboard');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');
    const claimButton = document.getElementById('claim-btn');

    // Funnel Contact target setup configurations
    const yourWhatsAppNumber = "67570000000"; // Put your live phone number here

    function openSidebar() {
        sidebarDashboard.classList.add('open');
        sidebarOverlay.classList.add('visible');
    }

    function closeSidebar() {
        sidebarDashboard.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
    }

    // High Compatibility Action Event Registration Engine Blocks
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openSidebar();
        });
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });

    // Verification WhatsApp redirection processing logic
    if (claimButton) {
        claimButton.addEventListener('click', () => {
            const accountID = prompt("Please enter your funded Broker Account ID to verify your position status:");
            
            if (accountID && accountID.trim() !== "") {
                alert(`Account ID (${accountID}) logged. Redirecting to WhatsApp verification...`);
                
                const messageText = encodeURIComponent(
                    `Hello Chief! I just registered and funded my account under your partner broker. My Broker Account ID is: ${accountID}. Please verify me and add me to the VIP Signals WhatsApp Group!`
                );
                
                window.open(`https://wa.me/67576766296?text=${messageText}`, '_blank');
            } else if (accountID !== null) {
                alert("Please enter a valid Account ID to claim your free VIP trading setups.");
            }
        });
    }
});
