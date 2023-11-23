let count = 5; // Timer

function countDown() {
        let timer = document.getElementById("timer"); // Timer ID
        if (count > 0) {
            count--;
            timer.innerHTML = "This page will redirect in " + count + " seconds."; // Timer Message
            setTimeout("countDown()", 1000);
        } else {
            window.location.href = "/dashboardAdmin"
        }
    }

window.addEventListener('load',()=>{countDown()})