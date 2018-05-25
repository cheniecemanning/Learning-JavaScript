clock = () => {
    const date = new Date();
    const sechand = document.getElementById("second");
    const minhand = document.getElementById("minute");
    const hrhand = document.getElementById("hour");
  
    const secs = date.getSeconds();
    const hrs =  date.getHours();
    const mins =  date.getMinutes();
  
    const hoursDeg = (360*(hrs/12))+((360/12)*(mins/60));
    const minsDeg =  360*(mins/60);
    const secondDeg = ((secs / 60) * 360) + 90;

    sechand.style.transform = `rotate(${secondDeg}deg)`;
    hrhand.style.transform = `rotate(${hoursDeg}deg)`;
    minhand.style.transform = `rotate(${minsDeg}deg)`;

}

setInterval(clock, 1000);

