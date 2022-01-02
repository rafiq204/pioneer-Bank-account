//login button event handler

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("Transaction-area");
  transactionArea.style.display = "block";
});

// deposit button event handler

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount").value;
  const depositNumber = parseFloat(depositAmount);

  updateSpanText("current-deposit", depositNumber);
  updateSpanText("current-balance", depositNumber);
  document.getElementById("deposit-amount").value = "";
});

//withdraw button event handler

const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  const withdrawAmountNumber = parseFloat(withdrawAmount);
  updateSpanText("current-withdraw", withdrawAmountNumber);
  updateSpanText("current-balance", -1 * withdrawAmountNumber);

  document.getElementById("withdraw-amount").value = "";
});

//function

function updateSpanText(id, addNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
