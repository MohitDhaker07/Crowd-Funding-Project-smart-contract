

// Check if Web3 is already injected by the browser 
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // If no provider is found, display an error message 
    alert('Please install MetaMask to use this application.');
}

// Connect the user's wallet
async function connectWallet() {
    try {
        // Request access to the user's accounts
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        // Set the active account
        const selectedAccount = accounts[0];

        // Display the connected account address 
        console.log('Connected account:', selectedAccount);
        document.getElementById('wallet-status').innerText = 'Connected';


    } catch (error) {

        console.error('Failed to connect wallet:', error);

        document.getElementById('wallet-status').innerText = 'Error connecting wallet';

    }
}



function sendEther() {

}

function getBalance() {

}

function refund() {

}

function createRequest() {

}

function voteRequest() {

}

function makePayment() {

}
