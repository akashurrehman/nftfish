import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';

const CardComponent = () => {
  const [activeButton, setActiveButton] = useState('All');
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-api-key': '8e425732cd7c41e88d1ca22204a774b6'
          }
        };

        const response = await fetch('https://api.opensea.io/api/v2/orders/ethereum/seaport/listings', options);
        const data = await response.json();
        setNFTs(data.orders); // Adjust according to your API response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

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
              onClick={() => handleButtonClick('All')}
            >
              All
            </button>
            <button
              className={`mx-4 btn-radius btn ${activeButton === 'Popular' ? 'active' : 'btn-primary'}`}
              onClick={() => handleButtonClick('Popular')}
            >
              Popular
            </button>
            <button
              className={`mx-2 btn-radius btn ${activeButton === 'New' ? 'active' : 'btn-primary'}`}
              onClick={() => handleButtonClick('New')}
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
        </div>
        <div className="row">
          {nfts.map((nft, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4" key={index}>
              <div className="card">
                <img
                  src={nft.maker_asset_bundle.assets[0]?.image_preview_url || 'https://via.placeholder.com/196x250'}
                  className="card-img-top"
                  alt="NFT Thumbnail"
                />
                <div className="card-body text-center">
                  <div className="price-container mb-2">
                    <span className="price-icon">💲</span>
                    <span className="price">{nft.current_price / 1e18} ETH</span>
                  </div>
                  <button className="btn btn-primary w-100">Buy</button>
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
