var atOptions = {
    'key': '2c5ba87416a72de7cfaf34b8cbb03b7a',
    'format': 'iframe',
    'height': 250,
    'width': 300,
    'params': {}
};

(function() {

    var adContainer = document.createElement('div');
    adContainer.style.position = 'fixed';
    adContainer.style.top = '50%';
    adContainer.style.left = '50%';
    adContainer.style.transform = 'translate(-50%, -50%)';
    adContainer.style.width = atOptions.width + 'px';
    adContainer.style.height = atOptions.height + 'px';
    adContainer.style.zIndex = '9999'; // Pastikan iklan muncul di atas konten lain

    document.body.appendChild(adContainer);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.topcreativeformat.com/2c5ba87416a72de7cfaf34b8cbb03b7a/invoke.js';
    adContainer.appendChild(script);
})();
