import React, { useState, useEffect } from "react";

const usePersistedState = (initialValue, name) => {
  const [state, setState] = useState(initialValue);
  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem(name));
    if (localValue) {
      setState(localValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default usePersistedState;
