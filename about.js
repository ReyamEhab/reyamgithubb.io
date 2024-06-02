// Create a new observer that watches when certain elements come into view
const observer = new IntersectionObserver(entries => {
    // For each observed entry (element)
    entries.forEach(entry => {
        // Loop through each span (bar) and its corresponding percentage
        spans.forEach((span, index) => {
            const percentage = percentages[index];
            // Check if the observed element is currently intersecting (visible)
            if (entry.isIntersecting) {
                // If it is visible, add the 'animate' class to the span and percentage
                span.classList.add('animate');
                percentage.classList.add('animate');
            } else {
                // If it is not visible, remove the 'animate' class from the span and percentage
                span.classList.remove('animate');
                percentage.classList.remove('animate');
            }
        });
    });
});

// Find the container that holds the skills
const skillContainer = document.querySelector('.skills-container');
// Find all the individual bars (spans) and percentage indicators
const spans = document.querySelectorAll('.bar span');
const percentages = document.querySelectorAll('.percentage');
// Start observing the skill container for changes in visibility
observer.observe(skillContainer);

// Define a function to update the positions of percentage indicators
function updatePercentagePositions() {
    // Find the width of the skill bar
    const barWidth = document.querySelector('.bar').clientWidth;
    // For each percentage indicator
    percentages.forEach(percentage => {
        // Calculate the width percentage of the bar that it represents
        const widthPercentage = parseFloat(percentage.textContent) / 100;
        // Set the left position of the percentage indicator based on the bar's width and percentage
        percentage.style.left = `${barWidth * widthPercentage - 12.5}px`;
    });
}

// Call the function initially to position the percentage indicators correctly
updatePercentagePositions();
