let sequence1 = [1, 2, 3];
let sequence2 = [1, 3, 5];
let diffSequence1 = 1;
let diffSequence2 = 2;

// assuming plus button has an id "button-plus"
const btnPlus = document.getElementById("button-plus");
// assuming plus button has an id "button-minus"
const btnMinus = document.getElementById("button-minus");

const reducer = (acc, curr) => acc + curr;

btnPlus.addEventListener("click", () => {
  sequence1.push(sequence1[sequence1.length - 1] + diffSequence1);
  sequence2.push(sequence2[sequence2.length - 1] + diffSequence2);
  displaySum(sequence1);
  displaySum(sequence2);
});

btnMinus.addEventListener("click", () => {
  sequence1.pop();
  sequence2.pop();
  displaySum(sequence1);
  displaySum(sequence2);
});

const displaySum = (arr) => {
  console.log(arr.reduce(reducer));
};
