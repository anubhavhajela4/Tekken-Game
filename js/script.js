const canvas = document.getElementById('canvas');
const startButton = document.getElementById('startButton');
const c = canvas.getContext('2d');
const backgroundImage = new Image();
c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);
backgroundImage.src = '/assets/bgg.png';

backgroundImage.onload = function() {
    c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};
document.addEventListener('click', (event)=> {  
    if(event.target.id === 'startButton') {
        canvas.style.display = 'block';
        startButton.style.display = 'none';
    }
});