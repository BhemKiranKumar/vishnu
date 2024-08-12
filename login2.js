// Select the container and the links
const container = document.querySelector('.container');
const loginLink = document.querySelector('.signInLink');
const registerLink = document.querySelector('.signUpLink');

// Add event listener for the register link
registerLink.addEventListener('click', () => {
    container.classList.add('active');
    // Optionally, add/remove classes for additional effects
});

// Add event listener for the login link
loginLink.addEventListener('click', () => {
    container.classList.remove('active');
    // Optionally, add/remove classes for additional effects
});
