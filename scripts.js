// Useful for making the latex: https://www.tutorialspoint.com/latex_equation_editor.htm

let questions = {
    "GREEN-100": ["What is the name of the green planet?", "c = \\pm\\sqrt{a^2 + b^2}"],
    "GREEN-200": ["", ""],
    "GREEN-300": ["", ""],
    "GREEN-400": ["", ""],
    "GREEN-500": ["", ""],
    "INTEGRALS-100": ["Take the partial derivative of the following function.", "\\frac{\\partial}{\\partial x} x^{2}+z"],
    "INTEGRALS-200": ["", ""],
    "INTEGRALS-300": ["", ""],
    "INTEGRALS-400": ["", ""],
    "INTEGRALS-500": ["", ""],
    "STOKES-100": ["", ""],
    "STOKES-200": ["", ""],
    "STOKES-300": ["", ""],
    "STOKES-400": ["", ""],
    "STOKES-500": ["", ""],
    "SURFACE-100": ["", ""],
    "SURFACE-200": ["", ""],
    "SURFACE-300": ["", ""],
    "SURFACE-400": ["", ""],
    "SURFACE-500": ["", ""],
    "RANDOM-100": ["", ""],
    "RANDOM-200": ["", ""],
    "RANDOM-300": ["", ""],
    "RANDOM-400": ["", ""],
    "RANDOM-500": ["", ""],
};



function popup(which) {
    console.log(which);
    document.getElementById("popup").style.display = "flex";
    document.getElementById("question-category").innerHTML = which;
    katex.render(`\\text{${questions[which][0]}}`, document.getElementById("question"));
    katex.render(questions[which][1], document.getElementById("question-rendered"));
}

function popdown() {
    document.getElementById("popup").style.display = "none";
}