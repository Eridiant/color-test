document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll(".square");
    const square = document.querySelector(".square-wrapper");
    const errors = document.querySelector("#errors");
    const err = document.querySelector("#error");
    const info = document.querySelector("#info");
    const diff = document.querySelector("#diff");

    let r, g, b;
    let error = 0;
    let differentSquare;
    let different = 0;

    changeColor();

    // generate random color for each square
    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = randomColor();
    // }

    function changeColor() {
        let rndColor = randomColor()
        square.style.backgroundColor = rndColor;

        // select one square to be slightly different
        differentSquare = squares[Math.floor(Math.random() * squares.length)];
        differentSquare.style.backgroundColor = slightlyDifferentColor(rndColor);
    }

    // add event listener
    square.addEventListener("click", listener);
    function listener(e) {
        let t = e.target;

        if (t === differentSquare) {
            err.removeAttribute("class");
            err.classList.add('true');
            diff.innerHTML = different;
            reduceDifference();
            changeColor();
        } else {
            err.removeAttribute("class");
            err.classList.add('false');
            error++;
            errors.innerHTML = error;
        }
        if (error > 5) {
            square.removeEventListener('click', listener);
            info.innerHTML = `результат ${different}/50`
        };
        if (different > 49) {
            square.removeEventListener('click', listener);
            alert('victory')
        };
    }

    // function to generate random color
    function randomColor() {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // function to generate slightly different color
    function slightlyDifferentColor(color) {
        r = r + (50 - different);
        g = g + (50 - different);
        b = b + (50 - different);
        if (different < 25) different += 2;
        else different++
        return `rgb(${r}, ${g}, ${b})`;
    }

    // function to reduce difference in color
    function reduceDifference() {
        differentSquare.style.cssText = '';
    }

})