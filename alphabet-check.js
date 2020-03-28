function alphabetSequence(str) {

  // we create two arrays, one based on split alphabet, one on based string input
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let strArr = str.split("");

  // we check our input to see where we need to start our iteration later on
  let inputIndexStart = 0;
  for (let i = 0; i < alphabetArr.length; i++) {
    if (strArr[0] === alphabetArr[i]) {
      inputIndexStart = i;
    }
  }

    // we iterate with for loop, checking if letters from alphabet match with letters from input string - if they do in whole string we return undefined, if they don't - we return first letter that doesn't and break the loop

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === alphabetArr[inputIndexStart + i]) {
      if (inputIndexStart + i === alphabetArr.length - 1) {
        return undefined;
        break;
      } else {
        // move on
      }
    } else {
      return alphabetArr[inputIndexStart + i];
      break;
    }
    }
}
