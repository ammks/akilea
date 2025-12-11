const photos = document.querySelectorAll('.mv-photo');

function revealPhotos() {
  photos.forEach(photo => {
    const rect = photo.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;

    if (rect.top < triggerPoint) {
      photo.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealPhotos);
