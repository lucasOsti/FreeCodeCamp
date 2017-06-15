/*
Challenge: "Reverse a String"
Reverse the provided string.

reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
*/
function reverseString(str) {

	str = str.split("")
			 .reverse()
			 .join("");
  
	return str;
}


/*
Challenge: "Factorialize a Number"
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

factorialize(5) should return a number.
factorialize(5) should return 120.
*/
function factorialize(num) {

	let rv = 1;
	
	for (i = 1; i <= num; i++) {
		rv *= i;
	}
 
	return rv;
}


/*
Challenge: "Check for Palindromes"
Return true if the given string is a palindrome. Otherwise, return false.

palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("not a palindrome") should return false.
*/
function prepare(str) {

	return str.replace(/[:|(|)|_| |,|.|\/|\\|-]/g , "")
			  .toLowerCase();
}


function palindrome(str) {

	let s = prepare(str),
		sLength = s.length,
		halfLength = Math.floor(sLength/2),
		firstPartOfStr = s.substring(0, halfLength),
		secondPartOfStr = '';
  
	if (sLength % 2) halfLength++;
  
	secondPartOfStr = s.substring(halfLength, sLength)
					   .split("")
					   .reverse()
					   .join("");
  
	if (firstPartOfStr == secondPartOfStr) return true;
	return false;
}


/*
Challenge: "Find the Longest Word in a String"
Return the length of the longest word in the provided sentence.

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
*/
function findLongestWord(str) {

	let strArray = str.split(" "),
		longest = 0;
  
	for (let i = 0; i < strArray.length; i++) {
		if (strArray[i].length > longest) {
			longest = strArray[i].length;
		}
	}
  
	return longest;
}


/*
Challenge: "Title Case a Sentence"
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
*/
function titleCase(str) {

	let i = 0,
		strArray = str.toLowerCase()
					  .split(" ");

	for (i = 0; i < strArray.length; i++) {
		let splitString = strArray[i].split("");
			splitString[0] = splitString[0].toUpperCase();
			strArray[i] = splitString.join("");
	}
  
	return strArray.join(" ");
}


/*
Challenge: "Return Largest Numbers in Arrays"
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
*/
function largestOfFour(arr) {

	let maxArray = [],
		i = 0;
  
	for (i = 0; i < arr.length; i++) {
		maxArray.push(Math.max.apply(null, arr[i]));
	}
  
	return maxArray;
}


/*
Challenge: "Confirm the Ending"
Check if a string (first argument, str) ends with the given target string (second argument, target).

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
*/
function confirmEnding(str, target) {

	let str = str.substr(str.length - target.length, str.length);
	return (str == target) ? true : false ;
}


/*
Challenge: "Repeat a string repeat a string"
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc"
*/
function repeatStringNumTimes(str, num) {

	let rv = "",
		i = 0;
  
	if (num >= 0) {
		for (i = 0; i < num; i++) {
			rv += str;
		}
	}
  
	return rv;
}


/*
Challenge: "Truncate a string"
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string. 

truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
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


/*
Challenge: "Chunky Monkey"
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
*/
function chunkArrayInGroups(arr, size) {

	let i = 0,
		j = 1,
		rv = [];
  
	while (i <= arr.length) {
		let tempArr = arr.slice(i, i + size);

		if (tempArr.length) rv.push(arr.slice(i, i + size));
		i += size;
	}
  
	return rv;
}


/*
Challenge: "Slasher Flick"
Return the remaining elements of an array after chopping off n elements from the head.

slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
*/
function slasher(arr, howMany) {

	if (howMany == 0) {
		return arr;
	} else if (arr.length >= howMany) {
		return arr.slice(howMany, arr.length);
	} else {
		return [];
	}
}

/*
Challenge: "Mutations"
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
*/
function mutation(arr) {

	let i = 0,
		source = arr[0].toLowerCase().split(""),
		search = arr[1].toLowerCase().split("");

	for (i = 0; i < search.length; i++) {
		if (source.indexOf(search[i]) == -1) return false; 
	}
  
	return true;
}


/*
Challenge: "Falsy Bouncer"
Remove all falsy values from an array.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
*/
function removeEmptyItem(item) {

	if (item) return item;
}

function bouncer(arr) {

	return arr.filter(removeEmptyItem);
}


/*
Challenge: "Seek and Destroy Complete"
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
*/
function destroyer(arr) {
	
	let i = 0,
		j = 0,
		rv = [];
  
	for(i = 0; i < arr.length; i++) {
		let add = true;
    
		for(j = 1; j < arguments.length; j++) {
			if (arr[i] == arguments[j]) add = false;
		}
    
		if (add) rv.push(arr[i]);
	}

	return rv;
}

/*
Challenge: "Where do I belong"
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
*/
function compare(x, y) {
	
	return x - y;
}

function getIndexToIns(arr, num) {
	
	let i = 0,
		isGreatest = false;
 
	arr.sort(compare);

	if (arr[arr.length-1] > num) {
		while (i < arr.length && !isGreatest) {
			if (arr[i] >= num && arr[i] != arr[i+1]) isGreatest = true;    
			i++;
		}

		return --i;
	} else {
		return arr.length;
	}
}


/*
Challenge: "Caesars Cipher"
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
*/
function rot13(str) {

	let i = 0,
		start = 'A'.charCodeAt(),
		end = 'Z'.charCodeAt();
  
	str = str.split("");
  
	for(i = 0; i < str.length; i++) {
		let code = str[i].charCodeAt();

		if (code != 32 && code != 33 && code != 63 && code != 46) {
			code += 13;

			if (code > end) {
				str[i] = String.fromCharCode(start + (code - end) - 1);
			} else {
				str[i] = String.fromCharCode(code);  
			}
		}
	}
  
	str = str.join("");
  
	return str;
}

