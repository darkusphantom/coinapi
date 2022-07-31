import { useEffect, useReducer } from "react";

// Reducer
const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: false,
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
    loading: true,
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

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincronizedItem, error, loading, item } = state;

  //States
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

  //Management of state
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 0);
  }, [sincronizedItem]);

  // Functions for modify state

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);

      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const getItem = (itemName) => localStorage.getItem(itemName);

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    getItem,
    loading,
    error,
    sincronizeItem,
  };
};

export { useLocalStorage };
