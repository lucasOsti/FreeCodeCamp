/*
 Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 Note that inserting the three dots to the end will add to the string length.
 However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string. 
*/

function truncateString(str, num) {
  
  if (str.length > num) {
    let spacePlace = 0;
  
    for (i in str) {
      if (str.charAt(i) == ' ') spacePlace = i; 
      if (i >= num) break;
    }

    
    if (!spacePlace || spacePlace >= num) {
      str = str.substr(0, num) + '...';
    } else {
      str = str.substr(0, spacePlace) + '...';
    }
  }
  
  return str;
}