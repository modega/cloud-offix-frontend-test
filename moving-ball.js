window.onload = function(){

    var ball = document.getElementsByClassName("ball");
    ball = ball[0];

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var ballWidth = ball.offsetWidth;
    var ballHeight = ball.offsetHeight;
    var direction = 1 //direction on X or Y axis can be 1 or -1
    var directionX = direction;
    var directionY = direction;
    var positionX = ball.getBoundingClientRect().left;
    var positionY = ball.getBoundingClientRect().top;
    var velocityScaleFactor = 2;

    ball.addEventListener("click", function (){
        directionX *= -direction;
        directionY *= -direction
        velocityScaleFactor += 0.5;
    });

    setInterval(function(){move()}, 1000/60);

    function move(){

        positionX += directionX * 1.2 * velocityScaleFactor;
        positionY += directionY * 1.2 * velocityScaleFactor;
        ball.style.transform = "translate(" + positionX + "px, " + positionY + "px)";
        checkBounce();
    }

    function getRandomColor(){
        var color = 'rgb(';
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        color += r+","+g+","+b+")";
        return color;
    }

    function checkBounce(){
        var bounced = false;

        if(positionX + ballWidth >= windowWidth) {
            directionX = -direction;
            bounced = true;
        }
        if(positionX <= 0) {
            directionX = direction;
            bounced = true;
        }
        if(positionY + ballHeight >= windowHeight) 
        {
            directionY = -direction;
            bounced = true;
        }
        if(positionY <= 0) {
            directionY = direction;
            bounced = true;
        }

        if(bounced){
            var color = getRandomColor();
            ball.style.background = color;
            velocityScaleFactor -= 0.5;
            if(velocityScaleFactor <= 0) velocityScaleFactor = 1;
        }
    }

};