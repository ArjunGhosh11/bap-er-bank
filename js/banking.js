// Handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)
    //Update Deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //clear the deposit input field
    depositInput.value = '';

    //Update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

});

//Handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear withdraw input
    withdrawInput.value = '';
})