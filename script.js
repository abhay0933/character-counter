let texts = document.querySelector("#input");
let totalCharacter= document.querySelector("#totalCharacters");
let remainingCharacters= document.querySelector("#remainingCharacters");

texts.addEventListener("keyup", () => {
    updateCount();
  });
  
  updateCount()
  
  function updateCount() {
    totalCharacter.innerText = texts.value.length;
    remainingCharacters.innerText =
      texts.getAttribute("maxLength") - texts.value.length;
  }