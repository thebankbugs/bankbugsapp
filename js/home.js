document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-btn');

    // Add click event for the Call to Action button
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Welcome! Your interactive journey has officially begun.');
            // Alternatively, scroll smoothly to content:
            // document.querySelector('.content-section').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
