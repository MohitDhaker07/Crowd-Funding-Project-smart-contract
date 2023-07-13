

// Check if Web3 is already injected by the browser 
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // If no provider is found, display an error message 
    alert('Please install MetaMask to use this application.');
}

// Connect the user's wallet
function connectToMetaMask() {
    // Check if MetaMask is available
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to use this feature.');
      return;
    }
  
    // Requesting access to the user's accounts
    ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        const account = accounts[0];
  
        // Updating the button's inner HTML
        const connectButton = document.getElementById('connectButton');
        connectButton.innerHTML = 'Connected';
  
        // Getting the balance of the account
        ethereum.request({
          method: 'eth_getBalance',
          params: [account, 'latest']
        })
          .then((balance) => {
            // Updating the HTML with the account balance
            const balanceElement = document.getElementById('balance');
            balanceElement.innerHTML = `Account Balance: ${balance} wei`;
          })
          .catch((error) => {
            console.error('Error retrieving balance:', error);
          });
      })
      .catch((error) => {
        console.error('Error connecting to MetaMask:', error);
      });
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
