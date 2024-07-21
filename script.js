let balance = 0;
let currentUser = '';

function login() {
    const username = document.getElementById('username').value.trim();

    if (username) {
        currentUser = username;
        loadBalance();
        document.getElementById('login').style.display = 'none';
        document.getElementById('piggy-box-container').style.display = 'block';
    } else {
        alert('Please enter a username.');
    }
}

function loadBalance() {
    const storedBalance = localStorage.getItem(currentUser);
    balance = storedBalance ? parseFloat(storedBalance) : 0;
    document.getElementById('balance').innerText = balance;
}

function saveMoney() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    
    if (amount && amount > 0) {
        balance += amount;
        localStorage.setItem(currentUser, balance);
        document.getElementById('balance').innerText = balance;
        amountInput.value = '';
    } else {
        alert('Please enter a valid amount.');
    }
}

function withdrawMoney() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    
    if (amount && amount > 0) {
        if (balance >= amount) {
            balance -= amount;
            localStorage.setItem(currentUser, balance);
            document.getElementById('balance').innerText = balance;
            amountInput.value = '';
        } else {
            alert('Insufficient balance.');
        }
    } else {
        alert('Please enter a valid amount.');
    }
}
