module.exports = function reverse (n) {
  
  n = n.toString();
  n = n.split("").reverse().join("");
  if(n[3] === '-'){
    n = n.slice(0, n.length - 1);
  }
  return n;
}
