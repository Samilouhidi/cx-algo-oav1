function isAPangram1(str) {
    for (let i = 65; i <= 90; i++) {
      let letter = String.fromCharCode(i);
  
      if (!str.toUpperCase().includes(letter)) {
        return false
      }
    }
  
    return true
  }

console.log(isAPangram1('THE QUICK brown fox jumps over the lazy dog'))
console.log(isAPangram1('Hello Efrei'))