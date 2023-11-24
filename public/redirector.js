let count = 5; // Timer

function countDown() {
        let timer = document.getElementById("timer"); // Timer ID
        if (count > 0) {
            count--;
            timer.innerHTML = "seras redirecionado en " + count + " segundos."; // Timer Message
            setTimeout("countDown()", 1000);
        } else {
            window.location.href = "/"
        }
    }

window.addEventListener('load',()=>{countDown()})