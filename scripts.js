// Useful for making the latex: https://www.tutorialspoint.com/latex_equation_editor.htm

let questions = {
    "INTEGRATIVES-100": ["Take the partial derivative of the following function.", "\\frac{\\partial}{\\partial x} x^{2}+z", "asdf"],
    "INTEGRATIVES-200": ["", "", ""],
    "INTEGRATIVES-300": ["", "", ""],
    "INTEGRATIVES-400": ["", "", ""],
    "INTEGRATIVES-500": ["", "", ""],
    "GREEN-100": ["What is the name of the green planet?", "c = \\pm\\sqrt{a^2 + b^2}", "asdfasdf"],
    "GREEN-200": ["", "", ""],
    "GREEN-300": ["", "", ""],
    "GREEN-400": ["", "", ""],
    "GREEN-500": ["", "", ""],
    "STOKES-100": ["", "", ""],
    "STOKES-200": ["", "", ""],
    "STOKES-300": ["", "", ""],
    "STOKES-400": ["", "", ""],
    "STOKES-500": ["", "", ""],
    "SURFACE-100": ["", "", ""],
    "SURFACE-200": ["", "", ""],
    "SURFACE-300": ["", "", ""],
    "SURFACE-400": ["", "", ""],
    "SURFACE-500": ["", "", ""],
    "RANDOM-100": ["", "", ""],
    "RANDOM-200": ["", "", ""],
    "RANDOM-300": ["", "", ""],
    "RANDOM-400": ["", "", ""],
    "RANDOM-500": ["", "", ""],
};



function popup(which) {
    document.body.classList.add("popup-open");
    document.getElementById("overall_gameboard").classList.remove("overall_gameboard_div_off");
    document.getElementById("overall_gameboard").classList.add("overall_gameboard_div_on");
    setTimeout(function() {
        document.body.classList.remove("popup-open");
        document.getElementById("overall_gameboard").classList.remove("overall_gameboard_div_on");
        document.getElementById("overall_gameboard").classList.add("overall_gameboard_div_off");
    },1000);
    console.log(which);
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup2").style.display = "flex";
    document.getElementById("question-category").innerHTML = which;
    katex.render(`\\text{${questions[which][0]}}`, document.getElementById("question"));
    katex.render(questions[which][1], document.getElementById("question-rendered"));
}

function REVEAL() {
    document.getElementById("question-rendered").innerHTML = questions[document.getElementById("question-category").innerHTML][2];
}

function popdown() {
    setTimeout(function() {
        document.getElementById("popup2").style.display = "none";
    }, 460);
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 480);
    
}