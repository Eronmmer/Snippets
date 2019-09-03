// Cuts out whitespace from the start of a string

function skipSpace(string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}

// The following function cuts out whitespace from the end of string

function skipEndSpace(string) {
  let reversed = string
    .split("")
    .reverse()
    .join("");
  let first = reversed.search(/\S/);
  if (first == -1) return "";
  return reversed
    .slice(first)
    .split("")
    .reverse()
    .join("");
}

// To remove whitespace from the beginning and end of a string, use the trim method

const string = "        My name is Erons         and  I'm   cool    ";
const trimmedString = string.trim();
console.log(trimmedString);
// -> My name is Erons         and  I'm   cool
