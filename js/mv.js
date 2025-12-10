const photos = document.querySelectorAll('.mv-photo');

const showPhotoOnScroll = () => {
  photos.forEach(photo => {
    const rect = photo.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      photo.classList.add('show');
    }
  });
};

window.addEventListener('scroll', showPhotoOnScroll);
