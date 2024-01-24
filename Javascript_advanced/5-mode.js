// Changing DOM with closure
// open the navigation As a guest and open the dev tools in your console window passed this code

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = "Welcome Holberton!";
    document.body.appendChild(newParagraph);

    const spookybtn = document.createElement('button');
    spookybtn.addEventListener("click", spooky);
    spookybtn.innerHTML = "Spooky";
    document.body.appendChild(spookybtn);

    const darkedMode = document.createElement('button');
    darkedMode.addEventListener("click", darkMode);
    darkedMode.innerHTML = "Dark Mode";
    document.body.appendChild(darkedMode);

    const screammMode = document.createElement('button');
    screammMode.addEventListener("click", screamMode);
    screammMode.innerHTML = "Scream Mode";
    document.body.appendChild(screammMode);
}

main();
