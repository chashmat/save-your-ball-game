document.querySelector('.player').style.left = '10px';
function movePlayer(event) {
    let x = event.clientX;
    let y = event.clientY;
    let player = document.querySelector('.player');
    player.style.left = x + 'px';
    player.style.top = y + 'px';
    let enimies = document.querySelector('.enimies');
    let h1 = document.querySelector('h1');
    if (getDistance(player.style.left, player.style.top, enimies.style.left, enimies.style.top) <= enimies.style.height + enimies.style.width + player.style.height + player.style.width) {
        player.style.background = 'blue';
    }
}