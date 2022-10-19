let clicker = document.getElementById("supertoffe_opdracht");
    let out = 0;

    function addScore() {
        out++
        clicker.innerText = out;
        document.body.style.backgroundColor = "greenyellow";
    }