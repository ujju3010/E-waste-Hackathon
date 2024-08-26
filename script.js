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
