function isPalindrome(word) {
  // Write your algorithm here
  let lowercaseWord = word.toLowerCase();
  let reversed = lowercaseWord.split('').reverse('').join('')

  return lowercaseWord === reversed;
}



console.log (isPalindrome("abba"));
console.log (isPalindrome("racecar"));
console.log (isPalindrome("a"));
console.log (isPalindrome("a"));
console.log (isPalindrome("robot"));
console.log (isPalindrome("ab"))

/* 
  Add your pseudocode here
*/
// create function with string parameter
// convert the string to lowercase
// split, reverse and join the string data to make a reversed string
// create a reversed string to check against the incoming string argument

/*
  Add written explanation of your solution here
*/
//task: Make a func that recieves one string arg and checks to see if the string is a palindrome
//solution: function takes string, splits and reverses it and checks to see if it is the same as the original string
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
