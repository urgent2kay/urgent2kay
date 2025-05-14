import React from "react";
import "./WalletForm.css";

interface WalletFormProps {
  onSuccess: () => void;
}

const WalletForm: React.FC<WalletFormProps> = ({ onSuccess }) => {
  const handleConnectWallet = () => {
    // Simulate wallet connection delay
    setTimeout(() => {
      console.log("Wallet connected successfully");
      onSuccess(); // Trigger the overlay
    }, 500);
  };

  return (
    <div className="connect-wallet">
      <div className="left-panel">
        <h2>Connect Wallet</h2>
        <h4>Installed</h4>
        <ul>
          <li onClick={handleConnectWallet}>
            <span>
              <img src="./Image/Binance.png" alt="Binance" />
            </span>
            Binance
          </li>
          <li onClick={handleConnectWallet}>
            <span>
              <img src="./Image/metamask.png" alt="Metamask" />
            </span>
            Metamask
          </li>
        </ul>
        <h4>Popular</h4>
        <ul>
          <li onClick={handleConnectWallet}>
            <span>
              <img src="./Image/rainbow.png" alt="Rainbow" />
            </span>
            Rainbow
          </li>
          <li onClick={handleConnectWallet}>
            <span>
              <img src="./Image/coinbaseW.png" alt="Coinbase" />
            </span>
            Coinbase Wallet
          </li>
          <li onClick={handleConnectWallet}>
            <span>
              <img src="./Image/walletconnect.png" alt="WalletConnect" />
            </span>
            WalletConnect
          </li>
        </ul>
      </div>

      <div className="right-panel">
        <div className="Wallet">
          <img src="./Image/walletconnect.png" alt="Walletconnect" />
          <div className="wallet-text">
            <h1>A Home for your Digital Assets</h1>
            <p>
              Wallets are used to send, receive, store, and display digital
              assets like Ethereum and NFTs.
            </p>
          </div>
        </div>

        <div className="Wallet">
          <img src="./Image/walletconnect.png" alt="Walletconnect" />
          <div className="wallet-text">
            <h1>A New Way to Log In</h1>
            <p>
              Instead of creating new accounts and passwords on every website,
              just connect your wallet.
            </p>
          </div>
        </div>

        <button className="get-wallet-button" onClick={handleConnectWallet}>
          Get a Wallet
        </button>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default WalletForm;
