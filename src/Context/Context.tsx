import { createContext, useState } from 'react';
import Datas from '../Datas/data.json';

export interface ContextType {
  data: any[];
  setData: (data: any) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [data, setData] = useState(Datas);

  return (
    <Context.Provider
      value={{
        data,
        setData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
