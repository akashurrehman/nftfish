import React,{useState} from 'react'
import Section from '../Section'
import './style.css';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

export default function ConnectCard() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Section className="cs-wallet_secton text-center">
        <Section tag='h2' className="cs-font_22 text-uppercase cs-normal cs-m0">Connect Wallet</Section>
        <Section className="cs-height_25 cs-height_lg_25" />
        <ul className="cs-list cs-style1 cs-mp0">
          <li id='moonPay'> 
              <div class="container">
                  <button onClick={() => setVisible(!visible)}>Buy with MoonPay</button>
              </div>
          </li>
        </ul>
        <Section className="cs-height_15 cs-height_lg_15" />
        <Section tag='p' className="cs-m0">Wallet are many variations of pass <br />ges of availabl.</Section>
      </Section>
      <MoonPayBuyWidget
        variant="overlay"
        baseCurrencyCode="usd"
        baseCurrencyAmount="100"
        defaultCurrencyCode="eth"
        visible={visible}
      />
    </>
  )
}



/* import React from 'react'
import Section from '../Section'
import './style.css';
export default function ConnectCard() {
  const handleBuyWithMoonPay = () => {
    window.open('https://buy-sandbox.moonpay.com/?apiKey=pk_test_123', '_blank');
  };

  return (
    <Section className="cs-wallet_secton text-center">
      <Section tag='h2' className="cs-font_22 text-uppercase cs-normal cs-m0">Connect Wallet</Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      <ul className="cs-list cs-style1 cs-mp0">
        <li id='moonPay'> 
            <div class="container">
                <button onClick={handleBuyWithMoonPay}>Buy with MoonPay</button>
            </div>
        </li>
      </ul>
      <Section className="cs-height_15 cs-height_lg_15" />
      <Section tag='p' className="cs-m0">Wallet are many variations of pass <br />ges of availabl.</Section>
    </Section>
  )
} */
