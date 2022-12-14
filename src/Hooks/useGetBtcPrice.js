import { useState, useEffect } from "react";

/*const initialState = {
  price: {},
  assets: {},
  history: [],
};*/

const useGetBtcPrice = (API) => {
  const [btcPrice, setBtcPrice] = useState({});

  const getBtcPrice = async (API) => {
    try {
      const response = await fetch(API);
      const status = await response.status;

      if (status !== 200) {
        throw new Error("Error ciudadano por API", status);
      }

      const data = await response.json();
      setBtcPrice(data);
    } catch (error) {
      console.error("We have an error:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => getBtcPrice(API), 3000);
  }, []);

  return btcPrice;
};

export { useGetBtcPrice };
