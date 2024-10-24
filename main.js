// Geometry Functions

// Function to calculate delta (difference)
function delta(a, b) {
    return a - b;
}

// Function to calculate slope of a line
function slope(x1, y1, x2, y2) {
    const Δy = delta(y2, y1);
    const Δx = delta(x2, x1);
    return Δy / Δx;
}

// Function to calculate average of two numbers
function average(n1, n2) {
    return (n1 + n2) / 2;
}

// Function to round a number to a specific number of decimals
function round_user(value, decimals) {
    return Number(value.toFixed(decimals));
}

// Function to calculate length of a line segment
function length(x1, y1, x2, y2) {
    const Δy = delta(y2, y1);
    const Δx = delta(x2, x1);
    return Math.sqrt(Δx ** 2 + Δy ** 2);
}

// Function to calculate volume of a rectangular prism
function rect_prism_volume() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const decimals = parseInt(document.getElementById("rounding").value);
    
    const volume = length * width * height;
    const roundedVolume = round_user(volume, decimals);
    
    document.getElementById("volumeOutput").innerText = `Volume: ${roundedVolume}`;
}

// Function to calculate surface area of a rectangular prism
function rect_prism_area() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const decimals = parseInt(document.getElementById("rounding").value);
    
    const area = 2 * (length * width + width * height + height * length);
    const roundedArea = round_user(area, decimals);
    
    document.getElementById("areaOutput").innerText = `Surface Area: ${roundedArea}`;
}

// Function to calculate volume of a sphere
function sphere_volume() {
    const radius = parseFloat(document.getElementById("radius").value);
    const decimals = parseInt(document.getElementById("rounding").value);
    
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    const roundedVolume = round_user(volume, decimals);
    
    document.getElementById("sphereVolumeOutput").innerText = `Sphere Volume: ${roundedVolume}`;
}

// Function to calculate surface area of a sphere
function sphere_area() {
    const radius = parseFloat(document.getElementById("radius").value);
    const decimals = parseInt(document.getElementById("rounding").value);
    
    const area = 4 * Math.PI * Math.pow(radius, 2);
    const roundedArea = round_user(area, decimals);
    
    document.getElementById("sphereAreaOutput").innerText = `Sphere Area: ${roundedArea}`;
}

// Function to calculate midpoint of a line segment
function midpoint() {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);
    const decimals = parseInt(document.getElementById("rounding").value);
    
    const midX = average(x1, x2);
    const midY = average(y1, y2);
    
    const roundedMidpoint = `Midpoint: (${round_user(midX, decimals)}, ${round_user(midY, decimals)})`;
    document.getElementById("midpointOutput").innerText = roundedMidpoint;
}

// Quadratic Functions

// Function to calculate y value for a given x in the quadratic equation
function y_quad(a, b, c, x) {
    return a * x ** 2 + b * x + c;
}

// Function to find the zeros of the quadratic equation
function findZeros() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const decimals = parseInt(document.getElementById("rounding").value);

    const discriminant = b ** 2 - 4 * a * c;

    let output = '';

    if (discriminant > 0) {
        const zero1 = round_user((-b + Math.sqrt(discriminant)) / (2 * a), decimals);
        const zero2 = round_user((-b - Math.sqrt(discriminant)) / (2 * a), decimals);
        output = `Zeros: ${zero1}, ${zero2}`;
    } else if (discriminant === 0) {
        const zero = round_user(-b / (2 * a), decimals);
        output = `Zero: ${zero}`;
    } else {
        output = "No real zeros.";
    }

    document.getElementById("quadratic_output").innerText = output;
    console.log(output);
}

// Function to find the vertex of the quadratic equation
function findVertex() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const decimals = parseInt(document.getElementById("rounding").value);

    const x_vertex = round_user(-b / (2 * a), decimals);
    const y_vertex = round_user(y_quad(a, b, c, x_vertex), decimals);

    const output = `Vertex: (${x_vertex}, ${y_vertex})`;
    document.getElementById("quadratic_output").innerText = output;
    console.log(output);
}