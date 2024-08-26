document.addEventListener('DOMContentLoaded', function() {
    const flowSteps = document.querySelectorAll('.flow-step');
    const flowImages = document.querySelectorAll('.flow-img');

    function onScroll() {
        flowSteps.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                step.classList.add('visible');
                flowImages[index].classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the function on page load to check the initial position
});
// Update price range label dynamically
document.getElementById('priceRange').addEventListener('input', function() {
    document.getElementById('priceValue').innerText = this.value;
});

// Add hover effect to pop out the service card
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});
