document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('form-modal');
    const showFormButton = document.getElementById('show-form');
    const closeModalButton = document.querySelector('.close-modal');

    // Open the modal
    showFormButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        modal.style.display = 'block';
    });

    // Close the modal
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
