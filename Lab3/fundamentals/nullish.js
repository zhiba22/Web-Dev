let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000




// without parentheses
let area1 = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area2 = height ?? (100 * width) ?? 50;