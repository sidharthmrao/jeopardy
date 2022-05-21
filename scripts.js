// Useful for making the latex: https://www.tutorialspoint.com/latex_equation_editor.htm

let questions = {
    "INTEGRATIVES-100": ["Evaluate the following expression:", "\\frac{\\partial}{\\partial x} x^{2}+z", "2x"],
    "INTEGRATIVES-200": ["Evaluate the following expression:", "\\frac{\\partial}{\\partial x}(x^3yz^2cos(x))", "3x^2yz^2cos(x)-x^3yz^2sin(x)"],
    "INTEGRATIVES-300": ["Evaluate the following expression:", "\\iint (x^2y^2z^2+cos(x)) \\mathrm{d} x\\,\\mathrm{d} y", "\\frac{8}{9}z^2+sin(2)"],
    "INTEGRATIVES-400": ["Evaluate the following expression:", "\\frac{\\partial^2}{\\partial x \\partial y}(x^2+2xy)", "2"],
    "INTEGRATIVES-500": ["Find the derivative of z with respect to t using the chain rule:", "z=2xy,x=t^2,y=2t.", "12t^2"],
    "GREEN-100": ["Is this a simply-connected surface?", "images/GREEN-100.png", "No"],
    "GREEN-200": ["Does this surface have positive or negative orientation?", "images/GREEN-200.png", "Positive"],
    "GREEN-300": ["Is this a conservative function:", "F(x,y)=<2x,2y>", "Yes"],
    "GREEN-400": ["Find the function f such that", "\\oint \\, F \\cdot dr=  \\oint \\,  \\nabla{f} \\cdot dr \\;\\; where \\;\\; F(x,y)=<x^2,y^2> ", "f=2x+\\frac{y^3}{3}+k"],
    "GREEN-500": ["Farmer Sid has a large irregularly shaped fence enclosing his chickens. The function for the fence can be given as (A). His enclosed area is a rectangle with vertices (0,0),(5,0),(5,2), and (0,2). What is the area of the fence?", "A:F(x,y)=<xy^2,2x^2y>", "50"],
    "STOKES-100": ["Is this the correct formula for surface area?:", "\\iint \\limits_{D}  \\sqrt{1+( \\frac{ \\partial z}{ \\partial x})^2 +( \\frac{ \\partial z}{ \\partial y})^2} \\mathrm{d}A  \\ ", "Yes"],
    "STOKES-200": ["True or False: Stokes Theorem is a special case of green's Theorem?", "", "Tis \\; the \\; other \\; way \\; around."],
    "STOKES-300": ["Set up the surface integral for the function below using the formula", "\\iint \\limits_{S} f(x,y,z)  \\mathrm{d}S  \\ =  \\iint \\limits_{D} f(r(u,v)) |R_{u} times R_{v}|  \\mathrm{d}A \\; for \\; the \\; function\\;   F=<u+v,u,1> and\\;    0<u<2 \\;  and  \\;0<v<1", "\\int^2_0\\int^1_0 u^2 +uv  \\mathrm{d} v\\,\\mathrm{d} u"],
    "STOKES-400": ["Compute the cross product of the tangent vectors for the function", "F=<5\\phi\\theta,5\\phi,5\\theta>", "<25,-25\\theta,-25\\phi>"],
    "STOKES-500": ["Use Stokes’ Theorem to evaluate: (Hint: it can be parameterized as a circle)", "\\iint curl(F)  \\cdot  \\mathrm{d}S  \\  , \\; where \\; F(x,y,z)=<2x,y,x> \\; and \\; S \\; is \\; the \\;hemisphere \\; x^2+y^2+z^2=1  , z>0", "-\\int^{2\\pi}_0 cos(t)sin(t) \\mathrm{d} t"],
    "TRIPLEINT-100": ["Solve:", "\\int^{2\\pi}_0\\int^1_0\\int^5_0  dx\\,dy\\,dz", "10{\\pi}"],
    "TRIPLEINT-200": ["Set up a triple integral for the volume of a triangular prism bounded by y=1-x, y=0, x=0, z=0,and z=4", "", "\\int^1_0\\int^{1-x}_0\\int^4_0 \\mathrm{d} z\\,\\mathrm{d} y\\,\\mathrm{d} x"],
    "TRIPLEINT-300": ["Set up an integral for the mass of a cube with vertices at (0,0),(0,1), and (1,1) and mass density function:", "p(x,y)=2x", "\\int^1_0\\int^1_0\\int^1_0 2x \\mathrm{d} z\\,\\mathrm{d} y\\,\\mathrm{d} x"],
    "TRIPLEINT-400": ["Set up an integral for the volume of a cylinder with parametric equations:", "x=cos(t), y=sin(t), z=z \\;\\;   0 \\le t  \\le {2 \\pi} \\;\\; and \\;\\; 0  \\le z  \\le 1", "\\int^{2\\pi}_0\\int^1_0\\int^1_0 r \\mathrm{d} z\\,\\mathrm{d} r\\,\\mathrm{d} {\\theta}"],
    "TRIPLEINT-500": ["Set up an integral for the volume inside cone A and under sphere B.", "A: z= \\sqrt{x^2+y^2}, \\;\\; B: x^2+y^2+z^2=1 ", "\\int^{2\\pi}_0\\int^{\\pi/4}_0\\int^1_0 {\\rho^2}sin({\\phi}) \\mathrm{d} {\\rho}\\,\\mathrm{d} {\\phi}\\,\\mathrm{d} {\\theta}"],
    "RANDOM-100": [" Find the dot product between  <1,2,3>  and  <7,8,9>", "", "50"],
    "RANDOM-200": ["Find the critical points of the function", "F=x^2+y^2", "<0,0>"],
    "RANDOM-300": ["Find the Jacobian of the function A hint: the Jacobian of a matrix is", "\\begin{bmatrix} \\frac{ \\partial u}{ \\partial x} &  \\frac{ \\partial u}{ \\partial y}  \\\\ \\frac{ \\partial v}{ \\partial x} &  \\frac{ \\partial v}{ \\partial y} \\end{bmatrix} \\\\ A: x=u^2-v^2 \\; and \\; y=u^2+v^2>", "8uv"],
    "RANDOM-400": ["Find the curl of the function", "<x,y,2>", "0"],
    "RANDOM-500": ["What is:", "\\frac{\\partial}{\\partial x}x", "1"],
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
    document.getElementById("question").innerHTML = questions[which][0];
    //katex.render(`\\text{${questions[which][0]}}`, document.getElementById("question"));
    if (questions[which][1].includes("images")) {
        document.getElementById("question-rendered").innerHTML = "<img src="+questions[which][1]+" alt='question'>";
    } else {
        katex.render(questions[which][1], document.getElementById("question-rendered"));
    }
}

function REVEAL() {
    katex.render(questions[document.getElementById("question-category").innerHTML][2], document.getElementById("question-rendered"));
}

function popdown() {
    setTimeout(function() {
        document.getElementById("popup2").style.display = "none";
    }, 460);
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 480);
    
}

var team_scores = [0,0,0,0]
var valid = [];

function start() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var teams = urlParams.get('teams');

    if (teams >= 1) {valid.push(document.getElementById("team1-score")); document.getElementById("team1_button").innerHTML = "<a href='#'>TEAM 1</a>";}
    if (teams >= 2) {valid.push(document.getElementById("team2-score")); document.getElementById("team2_button").innerHTML = "<a href='#'>TEAM 2</a>";}
    if (teams >= 3) {valid.push(document.getElementById("team3-score")); document.getElementById("team3_button").innerHTML = "<a href='#'>TEAM 3</a>";}
    if (teams >= 4) {valid.push(document.getElementById("team4-score")); document.getElementById("team4_button").innerHTML = "<a href='#'>TEAM 4</a>";}

    for (var i = 0; i < valid.length; i++) {
        valid[i].innerHTML = "TEAM "+(i+1).toString() + ": " + team_scores[i].toString();
    }
}

function addScore(team) {

    var score = document.getElementById("question-category").innerHTML.substring(document.getElementById("question-category").innerHTML.length - 3);

    team_scores[team-1] += parseInt(score);
    valid[team-1].innerHTML = "TEAM "+(team).toString() + ": " + team_scores[team-1].toString();
}