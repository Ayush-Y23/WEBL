let currentLight = "red";

// turn on red initially
document.getElementById("red").classList.add("on");

document.getElementById("changeBtn").addEventListener("click", changeLight);

function changeLight() {
    // turn all lights OFF
    document.getElementById("red").classList.remove("on");
    document.getElementById("yellow").classList.remove("on");
    document.getElementById("green").classList.remove("on");

    if (currentLight === "red") {
        document.getElementById("green").classList.add("on");
        currentLight = "green";
    }
    else if (currentLight === "green") {
        document.getElementById("yellow").classList.add("on");
        currentLight = "yellow";
    }
    else {
        document.getElementById("red").classList.add("on");
        currentLight = "red";
    }
}
