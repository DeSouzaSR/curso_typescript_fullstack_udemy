let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

console.log(varA, varB, varC);

// Não dá certo
// varA = varB;
// varB = varC;
// varC = varA;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
