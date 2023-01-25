document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll(".square");

    // generate random color for each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColor();
    }

    // select one square to be slightly different
    let differentSquare = squares[Math.floor(Math.random() * squares.length)];
    differentSquare.style.backgroundColor = slightlyDifferentColor(differentSquare.style.backgroundColor);

    // add event listener to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            if (this === differentSquare) {
                alert("You found the different square!");
                reduceDifference();
                location.reload();
            } else {
                alert("Try again!");
            }
        });
    }

    // function to generate random color
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    // function to generate slightly different color
    function slightlyDifferentColor(color) {
        let newColor = color.slice(4, -1).split(", ");
        newColor[0] = parseInt(newColor[0]) + 50;
        newColor[1] = parseInt(newColor[1]) + 50;
        newColor[2] = parseInt(newColor[2]) + 50;
        return "rgb(" + newColor[0] + ", " + newColor[1] + ", " + newColor[2] + ")";
    }

    // function to reduce difference in color
    function reduceDifference() {
        differentSquare.style.backgroundColor = randomColor();
    }

})