const audio = Array.from(document.querySelectorAll(".sound"));
let yo = 0;

document.addEventListener('keydown', play);
document.addEventListener('keyup', bye);


function play (e) {

    document.getElementById(e.keyCode).classList.remove("key");
    document.getElementById(e.keyCode).classList.add("pretty");

        switch(e.keyCode){
            case 65:
             audio[0].play();
            break;
    
            case 83:

             audio[1].play();
            break;
    
            case 68:
             audio[2].play();
            break;
    
            case 70:
            console.log("f");
             audio[3].play();
            break;
    
            case 71:
             audio[4].play();
            break;
    
            case 72:
             audio[5].play();
            break;
    
            case 74:
             audio[6].play();
            break;
    
            case 75:
             audio[7].play();
            break;
    
            case 76:
             audio[8].play();
            break;
        }

}

function bye (e){
    //console.log(e.keyCode);
    document.getElementById(e.keyCode).classList.remove("pretty");
    document.getElementById(e.keyCode).classList.add("key");

}


