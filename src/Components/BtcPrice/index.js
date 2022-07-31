import React from "react";
import { useGetBtcPrice } from "../../Hooks/useGetBtcPrice";
import { APIBtc } from "../../Api/APIBtc";
import "./BtcPrice.css";

const { API_BTCPRICE } = APIBtc;

const BtcPrice = () => {
  const btcPrice = useGetBtcPrice(API_BTCPRICE);
  const dataBtcPrice = btcPrice.data || " ";
  const { currencySymbol, id, symbol, rateUsd } = dataBtcPrice;
  const rateUsdFixed = parseFloat(rateUsd).toFixed(5) || "0";

  return (
    <section className="btc-price">
      <div className="container-btc-info">
        <p className="btc-price-name">
          <span className="btc-price-currencySymbol">{currencySymbol}</span>
          {id}
        </p>
        <p className="btc-price-symbol">{symbol}</p>
      </div>
      <div className="container-btc-details">
        <p className="btc-price-price">Price of {symbol}</p>
        <p className="btc-price-rate">$ {rateUsdFixed}</p>
      </div>
    </section>
  );
};

export { BtcPrice };
