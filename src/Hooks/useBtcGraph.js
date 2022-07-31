import React, { useReducer } from "react";
import { APIBtc } from "../Api/APIBtc";

const { API_BTCGRAPH } = APIBtc;

function useBtcGraph(initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincronizedItem, error, loading, item } = state;

  const onError = (error) =>
    dispatch({
      type: actionTypes.error,
      payload: error,
    });

  const onSuccess = (item) =>
    dispatch({
      type: actionTypes.success,
      payload: item,
    });

  const onSave = (item) =>
    dispatch({
      type: actionTypes.save,
      payload: item,
    });

  const onSincronize = () =>
    dispatch({
      type: actionTypes.sincronize,
    });

  React.useEffect(() => {
    setTimeout(async () => {
      try {
        const dataBtcGraph = await getBtcGraph();
        onSuccess(dataBtcGraph);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const getBtcGraph = async () => {
    try {
      const response = await fetch(API_BTCGRAPH);
      const status = await response.status;

      if (status !== 200) {
        throw new Error("Error ciudadano por API", status);
      }

      return await response.json();
    } catch (error) {
      console.error("We have an error:", error);
    }
  };

  const saveItem = (newItem) => {
    try {
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useBtcGraph };
