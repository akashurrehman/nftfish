import React, { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';
import './styles.scss';

const CardComponent = () => {
  const [activeButton, setActiveButton] = useState('All');
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null); 
  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-api-key': '8e425732cd7c41e88d1ca22204a774b6',
          },
        };

        const response = await fetch('https://api.opensea.io/api/v2/collection/puffy-vol-1/nfts?limit=20', options);
        if (response.ok) {
          const data = await response.json();
          setNFTs(data.nfts);
        } else {
          console.error('Error fetching NFTs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  useEffect(() => {
    checkMetaMaskAvailability();
  }, []);

  const checkMetaMaskAvailability = async () => {
    if (window.ethereum) {
      setMetaMaskInstalled(true);
      if (window.ethereum.selectedAddress) {
        const userWallet = window.ethereum.selectedAddress;
        const userData = await fetchUserFromDatabase(userWallet);
        if (userData) {
          setAccount(userWallet);
          setUsername(userData.username);
          setRegistered(true);
        }
      }
    } else {
      setMetaMaskInstalled(false);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // Check registration status
        const userData = await fetchUserFromDatabase(accounts[0]);
        if (userData) {
          setUsername(userData.username);
          setRegistered(true);
        } else {
          setRegistered(false);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask is not installed');
    }
  };

  const handleRegister = async () => {
    if (!username.trim()) {
      setError('Username cannot be empty.');
      return;
    }
    try {
      await saveUserToDatabase(account, username);
      setRegistered(true);
      setError(null);
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  const fetchUserFromDatabase = async (wallet) => {
    const users = {
      '0x1234567890abcdef...': { username: 'User1' },
      '0xabcdef1234567890...': { username: 'User2' },
    };
    return users[wallet] || null;
  };

  const saveUserToDatabase = async (wallet, username) => {
    console.log(`Saving ${wallet} with username ${username} to the database.`);
    return true;
  };

  const downloadMetaMask = () => {
    window.open('https://metamask.io/download.html', '_blank');
  };

  const buyNFT = async (nft) => {
    if (!account) {
      alert('Error! Please connect your wallet');
      return;
    }

    // Ensure MetaMask or other Ethereum provider is available
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      console.log(`Accounts:${accounts}, signer:${signer} and address:${address}`)
    }
    else {
      alert('MetaMask is not installed');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="dashboard">
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <button
              className={`btn-radius btn ${activeButton === 'All' ? 'active' : 'btn-success'}`}
              onClick={() => setActiveButton('All')}
            >
              All
            </button>
            <button
              className={`mx-4 btn-radius btn ${activeButton === 'Popular' ? 'active' : 'btn-primary'}`}
              onClick={() => setActiveButton('Popular')}
            >
              Popular
            </button>
            <button
              className={`mx-2 btn-radius btn ${activeButton === 'New' ? 'active' : 'btn-primary'}`}
              onClick={() => setActiveButton('New')}
            >
              New
            </button>
          </div>
          <div className="position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Search Game"
              style={{ width: '250px' }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search position-absolute"
              viewBox="0 0 16 16"
              style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}
            >
              <path
                fillRule="evenodd"
                d="M10.742 9.48a6.5 6.5 0 1 0-1.262 1.262l3.535 3.536a1 1 0 0 0 1.414-1.414l-3.536-3.535zM11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"
              />
            </svg>
          </div>
          <button onClick={connectWallet} className="btn btn-primary">
            {account ? 'Connected' : 'Connect Wallet'}
          </button>
        </div>
        {!registered ? (
          <div className="register-container">
            <h2>{metaMaskInstalled ? 'Register or Sign In' : 'MetaMask Required'}</h2>
            {!metaMaskInstalled ? (
              <div className="install-metamask">
                <p>Comet Puff uses MetaMask for the easiest user experience. Please install MetaMask and refresh the page.</p>
                <button onClick={downloadMetaMask} className="btn">Install MetaMask</button>
              </div>
            ) : (
              <>
                {!account ? (
                  <button onClick={connectWallet} className="btn">Connect MetaMask</button>
                ) : (
                  <div>
                    <p>Connected: {account}</p>
                    <div className="form-group">
                      <label>Username:</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                      />
                    </div>
                    <button onClick={handleRegister} className="btn">Complete Registration</button>
                    {error && <p className="error">{error}</p>}
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="connected-info">
            <p>Welcome back, {username}! Your wallet is connected: {account}</p>
          </div>
        )}
        <div className="row">
          {nfts?.map((nft) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4" key={nft.identifier}>
              <div className="card">
                <img
                  src={nft?.display_image_url || 'https://via.placeholder.com/196x250'}
                  className="card-img-top"
                  alt={nft.name}
                />
                <div className="card-body text-center">
                  <div className="price-container mb-2">
                    <span className="price-icon">💲</span>
                    <span className="price">30$</span>
                  </div>
                  <button
                    onClick={() => buyNFT(nft)}
                    className="btn btn-success w-100"
                  >
                    Buy NFT
                  </button>
                  <a href={nft.opensea_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mt-2">
                    View on OpenSea
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
