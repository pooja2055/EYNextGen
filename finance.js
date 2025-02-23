// Initialize transactions array
let transactions = [];

// Add transaction
function addTransaction() {
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (!description || !amount) {
    alert("Please enter both description and amount!");
    return;
  }

  // Create transaction object
  const newTransaction = {
    id: Date.now(),
    description: description,
    amount: amount
  };

  // Add the new transaction to the array
  transactions.push(newTransaction);

  // Clear the input fields
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';

  // Update the transactions list on the page
  updateTransactionList();
}

// Delete transaction
function deleteTransaction(id) {
  // Remove transaction with the given ID
  transactions = transactions.filter(transaction => transaction.id !== id);

  // Update the transactions list on the page
  updateTransactionList();
}

// Update the transaction list display
function updateTransactionList() {
  const transactionList = document.getElementById('transactions');

  // Clear the list first
  transactionList.innerHTML = '';

  // Loop through transactions and add them to the list
  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.classList.add('transaction-item');

    li.innerHTML = `
      <span>${transaction.description} - $${transaction.amount.toFixed(2)}</span>
      <button onclick="deleteTransaction(${transaction.id})">Delete</button>
    `;

    // Append the new list item
    transactionList.appendChild(li);
  });
}

// Burger Menu for mobile view
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});