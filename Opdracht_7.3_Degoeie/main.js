let clicker = document.getElementById("kansloos");

    let out = 0;



    function addScore() 
{

        out++

        clicker.innerText = out;

        if (out > 9)

        out = -1;
}