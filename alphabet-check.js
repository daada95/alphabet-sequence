function alphabetSequence(str) {

  // we create two arrays, one based on split alphabet, one on based string input
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let strArr = str.split("");

  // we iterate with for loop, checking if letters from alphabet match with letters from input string - if they do in whole string we return undefined, if they don't - we return first letter that doesn't and break the loop
  for (let i = 0; i < strArr.length; i++) {
    if (alphabetArr[i] === strArr[i]) {
      if (i === strArr.length - 1) {
        return undefined;
      } else {
        // nothing to see here, just move on ;)
      }
    } else if (alphabetArr[i] !== strArr[i]) {
      return alphabetArr[i];
      break;
    }
  }
}
