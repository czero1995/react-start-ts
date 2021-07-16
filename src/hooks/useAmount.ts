import { useState } from "react";

const useArray = <T>(intialArray: T[]) => {
  const [value, setValue] = useState(intialArray);

  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};

export default useArray;
