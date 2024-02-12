

const vowel = document.querySelector("#vowels");
const red = document.querySelector(".red");

vowel.addEventListener("input", function () {
  const inputValue = vowel.value.toLowerCase();
  let redCount = 0;

  for (let i = 0; i < inputValue.length; i++) {
    if (isVowel(inputValue[i])) {
      redCount++;
    }
  }
  
  red.textContent = `Vowel:${redCount}`;

  if (redCount > 0) {
    red.style.visibility = "visible";
  } else {
    red.style.visibility = "hidden";
  }
});

function isVowel(char) {
  return "aeiouAEIOU".includes(char);
}

