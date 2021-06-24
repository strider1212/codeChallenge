const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};




const findFrequency = function(array) {
   let mostLeast = {
    most: 0,
    least: 0
  };

  function mostFrequent (array){
      return array.sort((a,b) =>
            array.filter(v => v===a).length
          - array.filter(v => v===b).length
      ).pop();
  }

  function leastFrequent (array){
      return array.sort((a,b) =>
            array.filter(v => v===b).length
          - array.filter(v => v===a).length  
      ).pop();
  }

  mostLeast.most = mostFrequent(array);
  mostLeast.least = leastFrequent(array);

  return mostLeast;
};




const isPalindrome = function(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length -1; j >= 0; j--) {
      if (str[i] != str[j]) {
        return false;
      } else {
        return true;
      }
    }
  }  
};




const largestPair = function(array) {
  
  const products = [];
  
  for (let i = 0; i < array.length -1; i++) {
    products.push(array[i] * array[i + 1]);
  }

  return Math.max.apply(Math, products);

};




const removeParenth = function(str) {
  let firstParenth = str.split('(');
  let secondParenth = firstParenth[1].split(')');
  let backOfString = secondParenth[1];
  let frontOfString = firstParenth[0];
  let combined = frontOfString + backOfString;
 
  return combined;
  
};




const scoreScrabble = function(str) {
 const catchNumbers = [];

  
  const rateLetters = () => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'l' || str[i] === 'n' || str[i] === 'r' || str[i] === 's' || str[i] === 't') {
        catchNumbers.push(1);
      
      } else if (str[i] === 'd' || str[i] === 'g') {
        catchNumbers.push(2);
      
      } else if (str[i] === 'b' || str[i] === 'c' || str[i] === 'm' || str[i] === 'p') {
        catchNumbers.push(3);

      } else if (str[i] === 'f' || str[i] === 'h' || str[i] === 'v' || str[i] === 'w' || str[i] === 'y') {
        catchNumbers.push(4);
      
      } else if (str[i] === 'k') {
        catchNumbers.push(5);
      
      } else if (str[i] === 'j' || str[i] === 'x') {
        catchNumbers.push(8);
      
      } else if (str[i] === 'q' || str[i] === 'z') {
        catchNumbers.push(10);
      }
    }
  }

  rateLetters(str);

  const findSum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  return findSum(catchNumbers);
};


