//step 1 : add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // console.log('deposite btn');
    //step-2: get the deposite amount from the deposite in input field
    //for input field use .value to the value inside the input field
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // console.log(newDepositeAmount);
    // console.log(newDepositeAmount);
    //step 2.a:clear the field
    depositeField.value = '';
    if (isNaN(newDepositeAmount)) {
        alert('Please Input a valid Number')
        return;
    }
    // console.log(newDepositeAmount);
    // step:3 deposite current deposite total
    //for non-inpur (element other than unput, textarea) use innerText to get the text
    const depositeTotallElement = document.getElementById('deposit-total');
    //step 4:
    const previousDepositString = depositeTotallElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    // console.log(typeof (previousDeposit));
    const currentDepositTotal = previousDeposit + newDepositeAmount;

    depositeTotallElement.innerText = currentDepositTotal;
    //step 5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newDepositeAmount < 0) {
        alert('Sorry please check the deposite');
        return;
    }
    //step 6 : calculate current total balance
    const currentTotalBalance = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentTotalBalance;
})

// withdraw-btn
//step 1 :add event handler with the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const 
    // console.log('click');
    const withdrawUserInput = document.getElementById('withdraw-user-input');

    // console.log(withdrawUserInput);


    const withdrawAmauntString = withdrawUserInput.value;
    const withdrawAmaunt = parseFloat(withdrawAmauntString);
    if (isNaN(withdrawAmaunt)) {
        alert('Please provide a valid number');
        return;
    }
    // console.log(typeof (withdrawAmaunt));
    // console.log(typeof (withdrawAmaunt)

    //clear the input withdraw field
    withdrawUserInput.value = '';
    // set the amount withdraw
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //step 5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);

    if (withdrawAmaunt >= previousBalanceTotal) {

        alert('Invalite amount');
        return;

    }
    // console.log(typeof (previousWithdrawTotal));
    // step 4: calculate total withdraw amount
    const currentWithdrawTotal = withdrawAmaunt + previousWithdrawTotal;
    // console.log(currentWithdrawTotal);
    // console.log(withdrawAmaunt);
    // console.log(previousWithdrawTotal);
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // console.log(withdrawTotalElement);
    //step 6 : calculate current total balance
    const currentTotalBalance = previousBalanceTotal - withdrawAmaunt;
    balanceTotalElement.innerText = currentTotalBalance;
})