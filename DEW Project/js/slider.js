window.addEventListener('load', () => {

    let images = ['foto1.jpg','foto2.jpg','foto3.jpg','foto4.jpg'];
    const image = document.getElementById('image');
    let contador = 1;
    
    function slider() {
        image.src = `../assets/slider/${images[contador]}`;
        if (contador < images.length - 1) {
            contador++;
        } else {
            contador = 0;
        }
    }

    setInterval(slider,2000);
})