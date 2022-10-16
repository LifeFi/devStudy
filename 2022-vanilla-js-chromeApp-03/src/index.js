const numberGame = document.querySelector("#number-game");
const endRange = document.querySelector("#end-range");
const guessNumber = document.querySelector("#guess-number");
const resultNote = document.querySelector("#number-game span:nth-of-type(1)");
const result = document.querySelector("#number-game span:nth-of-type(2)");

function handleGameSubmit(event) {
  event.preventDefault(); // submit 화면 갱신을 강제로 막음.
  if (guessNumber.valueAsNumber > endRange.valueAsNumber) {
    resultNote.innerText = "Your number must be within the range!";
    resultNote.style.color = "Red";
    result.innerText = "";
    return;
  }

  const machineNumber = Math.floor(
    Math.random() * (endRange.valueAsNumber + 1) // 최대값 포함(즉 이하)하기 위해 +1
  );

  resultNote.style.color = "black";
  resultNote.innerText = `You chose: ${guessNumber.valueAsNumber}, the machine chose: ${machineNumber}`;
  // input에서, type이 number 여도, 입력할때만 number 이고
  // 저장은 string으로 됨. 따라서 valuAsNumber 를 사용함.

  if (guessNumber.valueAsNumber === machineNumber) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

numberGame.addEventListener("submit", handleGameSubmit);
