const pi = 3.1415962;
function doublePI() {
  return pi * 2;
}
function triplePI() {
  return pi * 3;
}
function quadruplePI() {
  return pi * 4;
}

export default pi; //can only have 1 default export per file
export { doublePI, triplePI, quadruplePI };
