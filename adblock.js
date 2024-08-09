document.write(""+`<script>
async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    console.log('AdBlock Enabled: '+adBlockEnabled);
    if(adBlockEnabled==true)
      {
var loadingAdsblock = document.createElement('div');
loadingAdsblock.id = 'loadingScreen';
loadingAdsblock.style.position = 'fixed';
loadingAdsblock.style.top = '0';
loadingAdsblock.style.left = '0';
loadingAdsblock.style.width = '100%';
loadingAdsblock.style.height = '100%';
loadingAdsblock.style.background = 'rgba(0, 0, 0, 1)';
loadingAdsblock.style.color = 'white';
loadingAdsblock.style.display = 'flex';
loadingAdsblock.style.justifyContent = 'center';
loadingAdsblock.style.alignItems = 'center';
loadingAdsblock.style.fontSize = '2em';
loadingAdsblock.style.zIndex = '9999';
loadingAdsblock.innerHTML = 'Please Stop Adsblock and Refresh This Page... ';
            document.body.appendChild(loadingAdsblock);
      }else{
      }
  }
}
detectAdBlock();
</script>`+"");
