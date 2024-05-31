// tests/sum.test.js
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

function exampleFunction() {
    console.log("This is a working function");
}

// Introducing a syntax error
function brokenFunction() {
    console.log("This function will break the application";
}
