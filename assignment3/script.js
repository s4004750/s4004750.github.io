function scrollLeft() {
    const container = document.querySelector('.outfit-display');
    container.scrollBy({
        top: 0,
        left: -220, // Adjust this value based on the width of the outfits
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('.outfit-display');
    container.scrollBy({
        top: 0,
        left: 220, // Adjust this value based on the width of the outfits
        behavior: 'smooth'
    });
}