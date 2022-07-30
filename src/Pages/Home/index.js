import React from "react";
import { useGetBtcPrice } from "../../Hooks/useBtcState";

const API_BTCPRICE = "https://api.coincap.io/v2/rates/bitcoin";
//const API_BTCDETAILS = "https://api.coincap.io/v2/assets/bitcoin";
//const API_BTCGRAPH = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1";

const Home = () => {
  const btcPrice = useGetBtcPrice(API_BTCPRICE);
  console.log(btcPrice.data);

  return <h2>Home</h2>;
};

export { Home };
