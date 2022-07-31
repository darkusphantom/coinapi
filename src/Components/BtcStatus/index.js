import React from "react";
import { useGetBtcStatus } from "../../Hooks/useGetBtcStatus";
import { APIBtc } from "../../Api/APIBtc";
import "./BtcStatus.css";

const { API_BTCDETAILS } = APIBtc;

const BtcStatus = () => {
  const btcStatus = useGetBtcStatus(API_BTCDETAILS);
  const dataBtcStatus = btcStatus.data || "";
  const {
    name,
    symbol,
    supply,
    maxSupply,
    marketCapUsd,
    priceUsd,
    volumeUsd24Hr,
    vwap24Hr,
    changePercent24Hr,
  } = dataBtcStatus;

  const formatNumber = (number) => parseFloat(number).toFixed(5);

  const supplyFixed = formatNumber(supply) || "0";
  const maxSupplyFixed = formatNumber(maxSupply) || "0";
  const marketCapUsdFixed = formatNumber(marketCapUsd) || "0";
  const volumeUsd24HrFixed = formatNumber(volumeUsd24Hr) || "0";
  const priceUsdFixed = formatNumber(priceUsd) || "0";
  const vwap24HrFixed = formatNumber(vwap24Hr) || "0";
  const changePercent24HrFixed =
    parseFloat(changePercent24Hr).toFixed(2) || "0";

  const percentStatus =
    parseFloat(changePercent24HrFixed) >= 0 ? "percent-green" : "percent-red";

  return (
    <section className="btc-status">
      <h2 className="btc-status-title">
        <span className={`btc-status-percent ${percentStatus}`}>
          {changePercent24HrFixed}
        </span>
        Status of {name} ({symbol})
      </h2>
      <div className="btc-status-market">
        <div className="market-item">
          <p className="market-item-name">
            Market Cap <span>USD</span>:
          </p>
          <p className="market-item-price">$ {marketCapUsdFixed}</p>
        </div>
        <div className="market-item">
          <p className="market-item-name">supply:</p>
          <p className="market-item-price">{supplyFixed}</p>
        </div>
        <div className="market-item">
          <p className="market-item-name">Max supply:</p>
          <p className="market-item-price">{maxSupplyFixed}</p>
        </div>
        <div className="market-item">
          <p className="market-item-name">
            Market Cap <span>USD</span>:
          </p>
          <p className="market-item-price">$ {marketCapUsdFixed}</p>
        </div>
        <div className="market-item">
          <p className="market-item-name">
            Vol. <span>USD</span> Last 24h:
          </p>
          <p className="market-item-price">$ {volumeUsd24HrFixed}</p>
        </div>
        <div className="market-item">
          <p className="market-item-name">
            Price <span>USD</span>:
          </p>
          <p className="market-item-price">$ {priceUsdFixed}</p>
        </div>
        <div className="market-item">
          <p className="market-item-name">Vol. Weighted Average Last 24h</p>
          <p className="market-item-price">$ {vwap24HrFixed}</p>
        </div>
      </div>
    </section>
  );
};

export { BtcStatus };
