import { useCallback, useState } from "react";

const useBoolean = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggle = useCallback(() => {
    setState(!state);
  }, [state]);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  return { state, toggle, setTrue, setFalse };
};
export default useBoolean;
