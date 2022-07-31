import { useState } from "react";

const initialState = false;

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(initialState);

  const changeStateLoading = (payload) => setIsLoading(payload);

  return {
    isLoading,
    changeStateLoading,
  };
};

export { useLoading };
