var ars = rChoice([
   'https://imagart.com/',
   'https://ngeblog.eu.org/',
]);

function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}