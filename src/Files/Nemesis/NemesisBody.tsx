import { useState } from 'react';

interface RowData {
  data: {
    ID: string;
    "Nemesis ID": string;
    "Secrete Code": string;
  };
}

interface NemesisBodyProps {
  rowData: RowData[];
}

export default function NemesisBody(props: NemesisBodyProps) {
  const { rowData } = props;
  const [data, setData] = useState<RowData[]>(rowData);

  const deleteRow = (delRowID: string) => {
    const updatedData = data.filter((row) => row.data.ID !== delRowID);
    setData(updatedData);
  };

  const nemesisComponents = data.map((dat) => {
    const { ID, "Nemesis ID": nemesisID, "Secrete Code": secretCode } = dat.data;
    return (
      <div className="nemesis--box" key={ID}>
        <p>{ID}</p>
        <p>{nemesisID}</p>
        <p>{secretCode}</p>
        <button onClick={() => deleteRow(ID)}>X</button>
      </div>
    );
  });

  return <main>{nemesisComponents.length ? nemesisComponents : "No data"}</main>;
}
