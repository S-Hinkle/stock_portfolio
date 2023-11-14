// Fetch and Display All Users
function loadAllUsers() {
    fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(users => {
            const usersList = document.getElementById('users-list');
            usersList.innerHTML = '';
            users.forEach(user => {
                const div = document.createElement('div');
                div.textContent = `ID: ${user.id}, Name: ${user.name}`;
                usersList.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch and Display All Stocks
function loadAllStocks() {
    fetch('http://localhost:3001/stocks')
        .then(response => response.json())
        .then(stocks => {
            const stocksList = document.getElementById('stocks-list');
            stocksList.innerHTML = '';
            stocks.forEach(stock => {
                const div = document.createElement('div');
                div.textContent = `ID: ${stock.id}, Name: ${stock.name}, Ticker: ${stock.ticker}, Shares: ${stock.shares}`;
                stocksList.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Get User by ID
function getUserById() {
    const id = document.getElementById('user-id').value;
    fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .then(user => {
            const usersList = document.getElementById('users-list');
            usersList.innerHTML = '';
            const div = document.createElement('div');
            div.textContent = `ID: ${user.id}, Name: ${user.name}`;
            usersList.appendChild(div);
        })
        .catch(error => console.error('Error:', error));
}

// Get Stock by ID
function getStockById() {
    const id = document.getElementById('stock-id').value;
    fetch(`http://localhost:3001/stocks/${id}`)
        .then(response => response.json())
        .then(stock => {
            const stocksList = document.getElementById('stocks-list');
            stocksList.innerHTML = '';
            const div = document.createElement('div');
            div.textContent = `ID: ${stock.id}, Name: ${stock.name}, Ticker: ${stock.ticker}, Shares: ${stock.shares}`;
            stocksList.appendChild(div);
        })
        .catch(error => console.error('Error:', error));
}

// Add User
function addUser() {
    const name = document.getElementById('new-user-name').value;
    fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    })
    .then(() => {
        loadAllUsers();
        document.getElementById('new-user-name').value = '';
    })
    .catch(error => console.error('Error:', error));
}

// Add Stock
function addStock() {
    const name = document.getElementById('new-stock-name').value;
    const ticker = document.getElementById('new-stock-ticker').value;
    const shares = parseInt(document.getElementById('new-stock-shares').value, 10);
    const user_id = parseInt(document.getElementById('new-stock-user-id').value, 10);

    fetch('http://localhost:3001/stocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, ticker, shares, user_id })
    })
    .then(() => {
        loadAllStocks();
        document.getElementById('new-stock-name').value = '';
        document.getElementById('new-stock-ticker').value = '';
        document.getElementById('new-stock-shares').value = '';
        document.getElementById('new-stock-user-id').value = '';
    })
    .catch(error => console.error('Error:', error));
}

// Delete User
function deleteUser() {
    const id = document.getElementById('user-id').value;
    fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' })
        .then(() => {
            loadAllUsers();
            document.getElementById('user-id').value = '';
        })
        .catch(error => console.error('Error:', error));
}

// Delete Stock
function deleteStock() {
    const id = document.getElementById('stock-id').value;
    fetch(`http://localhost:3001/stocks/${id}`, { method: 'DELETE' })
        .then(() => {
            loadAllStocks();
            document.getElementById('stock-id').value = '';
        })
        .catch(error => console.error('Error:', error));
}



// Event listeners for loading all users and stocks
document.addEventListener('DOMContentLoaded', () => {
    const loadUsersButton = document.getElementById('load-users');
    const loadStocksButton = document.getElementById('load-stocks');

    if (loadUsersButton) {
        loadUsersButton.addEventListener('click', loadAllUsers);
    }
    if (loadStocksButton) {
        loadStocksButton.addEventListener('click', loadAllStocks);
    }
});

// Event listener for getting a user by ID
const getUserButton = document.getElementById('get-user');
if (getUserButton) {
    getUserButton.addEventListener('click', getUserById);
}

// Event listener for getting a stock by ID
const getStockButton = document.getElementById('get-stock');
if (getStockButton) {
    getStockButton.addEventListener('click', getStockById);
}

// Event listener for adding a new user
const addUserButton = document.getElementById('add-user');
if (addUserButton) {
    addUserButton.addEventListener('click', addUser);
}

// Event listener for adding a new stock
const addStockButton = document.getElementById('add-stock');
if (addStockButton) {
    addStockButton.addEventListener('click', addStock);
}

// Event listener for deleting a user
const deleteUserButton = document.getElementById('delete-user');
if (deleteUserButton) {
    deleteUserButton.addEventListener('click', deleteUser);
}

// Event listener for deleting a stock
const deleteStockButton = document.getElementById('delete-stock');
if (deleteStockButton) {
    deleteStockButton.addEventListener('click', deleteStock);
}