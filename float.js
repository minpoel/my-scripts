function closeBanner() {
  const banner = document.getElementById("floating-banner");
  banner.style.display = "none"; 
}

// Fungsi untuk mengatur ukuran banner
function resizeBanner() {
  const banner = document.getElementById("floating-banner");
  const adElement = document.querySelector(".adsbygoogle");

  if (adElement) {
    banner.style.width = adElement.offsetWidth + "px";
    banner.style.height = adElement.offsetHeight + "px";
  }
}

// Panggil resizeBanner setelah iklan dimuat
window.addEventListener('load', resizeBanner); 
