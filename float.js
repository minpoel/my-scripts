// Script untuk mengontrol tampilan banner
    const bannerContainer = document.querySelector('.banner-container');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
      bannerContainer.style.bottom = '-100%'; // Menghilangkan banner
    });
