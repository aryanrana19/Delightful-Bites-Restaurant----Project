// Function to open the modal
function openModal() {
    var modal = document.querySelector('.contact-modal');
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.querySelector('.contact-modal');
    modal.style.display = 'none';
}


// Select Seat
function toggleChair(chair) {
    chair.classList.toggle('selected');
}