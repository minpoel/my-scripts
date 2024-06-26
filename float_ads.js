(function() {
    // Buat elemen div untuk floating ads
    var floatAds = document.createElement('div');
    floatAds.id = 'floatads';
    floatAds.style.width = '100%';
    floatAds.style.textAlign = 'center';
    floatAds.style.position = 'fixed';
    floatAds.style.bottom = '0';
    floatAds.style.left = '0';
    floatAds.style.right = '0';
    floatAds.style.zIndex = '9999';

    // Buat container untuk iklan
    var adContainer = document.createElement('div');
    adContainer.style.display = 'inline-block';
    adContainer.style.maxWidth = '728px';
    adContainer.style.height = 'auto';
    adContainer.style.overflow = 'hidden';
    adContainer.style.margin = 'auto';

    // Buat dan tambahkan script iklan ke dalam adContainer
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://minpoel.github.io/my-scripts/300x250.js';
    adContainer.appendChild(script);

    // Tambahkan adContainer ke dalam floatAds
    floatAds.appendChild(adContainer);

    // Buat tombol close
    var closeButton = document.createElement('div');
    closeButton.innerHTML = "<a id='close-floatads' onclick='document.getElementById(&#39;floatads&#39;).style.display = &#39;none&#39;;' style='cursor:pointer;'><img alt='close' src='https://3.bp.blogspot.com/-ZZSacDHLWlM/VhvlKTMjbLI/AAAAAAAAF2M/UDzU4rrvcaI/s1600/btn_close.gif' title='close button'/></a>";
    floatAds.appendChild(closeButton);

    // Tambahkan floatAds ke body
    document.body.appendChild(floatAds);
})();
