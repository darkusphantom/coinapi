import { useState, useEffect } from "react";

const useGetBtcStatus = (API) => {
  const [btcStatus, setBtcStatus] = useState({});

  const getBtcStatus = async (API) => {
    try {
      const response = await fetch(API);
      const status = await response.status;

      if (status !== 200) {
        throw new Error("Error ciudadano por API", status);
      }

      const data = await response.json();
      setBtcStatus(data);
    } catch (error) {
      console.error("We have an error:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => getBtcStatus(API), 3000);
  }, []);

  return btcStatus;
};

export { useGetBtcStatus };
