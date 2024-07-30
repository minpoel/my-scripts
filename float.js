function closeBanner() {
  const banner = document.getElementById("floating-banner");
  banner.classList.remove('show'); // Hapus class 'show'
}

function showBanner() {
  const banner = document.getElementById("floating-banner");
  banner.classList.add('show'); // Tambahkan class 'show'
}

// Panggil showBanner setelah banner dimuat
window.addEventListener('load', showBanner);
