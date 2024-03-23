const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/e3a353ba9d1b4c4299512af80277f4e5");
const privateKeySender = "XXX Priv Key";
const addressReceiver = "XXX Wallet";

(async () => {
    const wallet = new ethers.Wallet(privateKeySender, provider);
    const balance = await provider.getBalance(wallet.address);
    console.log("sender:", wallet.address);
    console.log("balance:", ethers.formatEther(balance));
    
    const amount = ethers.parseEther(".001");
    if (balance > amount) {
        const transaction = {
            to: addressReceiver,
            value: amount,
        };
    
        const transactionResponse = await wallet.sendTransaction(transaction);
        console.log("transaction:", transactionResponse);
    }
})();