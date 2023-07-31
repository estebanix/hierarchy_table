import { createContext, useState } from 'react';
import Datas from '../Datas/data.json';

export interface ContextType {
  data: any[];
  setData: (data: any) => void;
  expandedRows: any[];
  setExpandedRows: (data: any) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [data, setData] = useState(Datas);
  const [expandedRows, setExpandedRows] = useState({});

  return (
    <Context.Provider
      value={{
        data,
        setData,
        expandedRows,
        setExpandedRows
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
