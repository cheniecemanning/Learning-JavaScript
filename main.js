document.addEventListener('keydown', play = (e) => {

    document.getElementById(e.keyCode).classList.remove("key");
    document.getElementById(e.keyCode).classList.add("pretty");
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();

})

document.addEventListener('keyup', bye = (e) => {
    //console.log(e.keyCode);
    document.getElementById(e.keyCode).classList.remove("pretty");
    document.getElementById(e.keyCode).classList.add("key");

})
