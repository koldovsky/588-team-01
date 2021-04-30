(function(){
    let date = new Date('Jun 1 2021 00:00:00') 

    function countdown(){
        let now = new Date();
        const gap = date - now;
        
        let days = Math.floor(gap / 1000 / 60 / 60 / 24);
        let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(gap / 1000 / 60 ) % 60;
        let seconds = Math.floor(gap / 1000 ) % 60;

        if(gap < 0){document.getElementById('timer').innerText = "Розходимось"
        }else{
        document.getElementById('d').innerText = days;
        document.getElementById('h').innerText = hours;
        document.getElementById('m').innerText = minutes;
        document.getElementById('s').innerText = seconds;
        }
    }

    countdown();

    setInterval(countdown, 1000);
})();
