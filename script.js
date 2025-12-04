document.addEventListener('DOMContentLoaded', () => {

    // Base styles for nav & buttons
    const baseClasses = "py-2 px-4 rounded-xl border transition duration-300 whitespace-nowrap";
            
    // Apply nav-link styling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.className = `${baseClasses} bg-secondary-bg border-border-gray hover:bg-gray-600 text-sm md:text-base`;
    });

    // Contact button
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.className = `${baseClasses} bg-transparent border-white hover:bg-white hover:text-primary-bg font-medium text-sm md:text-base`;
    }

    // Active state for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function () {
            
            // Remove active styles
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('border-white', 'text-white', 'scale-105');
                link.classList.add('border-border-gray', 'text-text-light');
            });

            // Apply to clicked link only
            if (this.classList.contains('nav-link')) {
                this.classList.add('border-white', 'text-white', 'scale-105');
                this.classList.remove('border-border-gray', 'text-text-light');
            }
        });
    });
});
