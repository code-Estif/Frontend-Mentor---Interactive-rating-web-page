const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('.submit-btn');
const ratingState = document.getElementById('ratingState');
const thankYouState = document.getElementById('thankYouState');
const selectedRatingSpan = document.getElementById('selectedRating');

let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.getAttribute('data-rating');
    })
})

submitButton.addEventListener('click', function() {
    if (selectedRating === 0) {
        alert('Please select a rating before submitting!');
        return;
    }
    
    selectedRatingSpan.textContent = selectedRating;
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
})