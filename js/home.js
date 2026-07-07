document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors for the Slide-Out Menu System
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDashboard = document.getElementById('sidebar-dashboard');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');

    // WhatsApp Configuration Metrics
    const claimButton = document.getElementById('claim-btn');
    const yourWhatsAppNumber = "67570000000"; // Replace with your number!

    // Function to Open Sidebar Menu
    function openSidebar() {
        sidebarDashboard.classList.add('open');
        sidebarOverlay.classList.add('visible');
    }

    // Function to Close Sidebar Menu
    function closeSidebar() {
        sidebarDashboard.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
    }

    // Event Triggers for Dashboard Sidebar
    if (menuToggleBtn) menuToggleBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Auto-close sidebar dashboard menu when clicking any inner navigation destination anchor
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Verification Desk System (WhatsApp funnel trigger box)
    if (claimButton) {
        claimButton.addEventListener('click', () => {
            const accountID = prompt("Please enter your funded Broker Account ID to verify your position status:");
            
            if (accountID && accountID.trim() !== "") {
                alert(`Account ID (${accountID}) logged. Redirecting you to our validation desk...`);
                
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
