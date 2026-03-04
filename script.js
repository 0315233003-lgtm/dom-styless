console.log("Script started");

function changeStyles () {
    console.log("click");
    //Get the p element and store it in a variable
    let p = document.getElementById("text");
    p.innerText = "The text has been changed";

    //set some styles
    p.style.color = "red";
    p.style.fontSize = "50px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "pink";
}

