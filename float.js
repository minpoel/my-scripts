// Script banner responsif
function adjustBannerSize() {
  var banner = document.getElementById('floating-banner');
  var maxWidth = window.innerWidth * 0.8; // 80% dari lebar layar
  var maxHeight = window.innerHeight * 0.8; // 80% dari tinggi layar

  // Set
  banner.style.maxWidth = Math.min(maxWidth, maxHeight) + 'px';
}

// call
adjustBannerSize();

// call
window.addEventListener('resize', adjustBannerSize);

// Event listener close
document.getElementById('close-btn').addEventListener('click', function() {
  var banner = document.getElementById('floating-banner');
  banner.style.display = 'none'; // banner close click
});
