
// Login Btn handller
const enterBtn = document.getElementById("login");
enterBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
// Deposit Btn handller
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
const depositAmount = document.getElementById("depositAmount").value;
depositNumber = parseFloat(depositAmount);

updateSpanText("currentDeposit", depositNumber);

//const currentDeposit = document.getElementById("currentDeposit").innerText;
//currentAmount = parseFloat(currentDeposit);
//const totalDeposit = depositNumber + currentAmount;
//document.getElementById("currentDeposit").innerText = totalDeposit;

updateSpanText("currentBalance", depositNumber);

document.getElementById("depositAmount").value = "";

})

function updateInputNumber(id){
const withdrawAmount = document.getElementById(id).value;
withdrawNumber = parseFloat(withdrawAmount);
return withdrawNumber
}

function updateSpanText(id, depositNumber){
const currentBalance = document.getElementById(id).innerText;
balanceNumber = parseFloat(currentBalance);
const totalBalance = depositNumber + balanceNumber;
document.getElementById(id).innerText = totalBalance;
}

// Withdraw Btn Handller
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
const withdrawNumber = updateInputNumber("withdrawAmount");
updateSpanText("currentWithdraw", withdrawNumber);

document.getElementById("withdrawAmount").value = "";

const currentBalance = document.getElementById("currentBalance").innerText;
balanceNumber = parseFloat(currentBalance);
const totalBalance = balanceNumber + -1*withdrawNumber;
document.getElementById("currentBalance").innerText = totalBalance; 

})

