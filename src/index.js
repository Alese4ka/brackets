module.exports = function check(str, bracketsConfig) {
  function t() {
    let obj = {}
    for (let i = 0; i < bracketsConfig.length; i++) {
      for (let j = 1; j < bracketsConfig[i].length; j++){
        obj[bracketsConfig[i][j]] = bracketsConfig[i][j-1]
      }
    }
    return obj
  }

  const OPEN_BRACKETS = Object.values(t()) 
  const BRACKETS_PAIR = t()

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
}