window.addEventListener("load", function(){
    let divElement = document.getElementById("div");
    let textStrong = false;
    divElement.innerHTML = "<strong>This is my text</strong>";
    divElement.onclick = function(){
        divElement.innerText = "This is my new text";
    };
})