document.getElementById('text').onkeydown = function(event) {
    if (event.key === 'Enter') {
        openSearch();
    }
}

function openLucky() {
    youLucky= window.open("https://www.google.com/doodles","_self");
}

function openSearch() {
    yourSearch= window.open(`https://www.google.com/search?q=${document.getElementById('text').value}`);
}
