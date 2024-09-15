document.addEventListener('DOMContentLoaded', function() {
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    const walletStatus = document.getElementById('walletStatus');

    connectWalletBtn.addEventListener('click', async function() {
        if (window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                const publicKey = response.publicKey.toString();
                walletStatus.textContent = `Connected: ${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`;
                connectWalletBtn.textContent = 'Disconnect';
                connectWalletBtn.onclick = disconnectWallet;
            } catch (err) {
                console.error(err);
                walletStatus.textContent = 'Connection failed';
            }
        } else {
            window.open('https://phantom.app/', '_blank');
        }
    });

    async function disconnectWallet() {
        if (window.solana && window.solana.isConnected) {
            await window.solana.disconnect();
            walletStatus.textContent = '';
            connectWalletBtn.textContent = 'Connect Wallet';
            connectWalletBtn.onclick = null;
        }
    }
});