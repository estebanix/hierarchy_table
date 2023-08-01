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
  const [nemesisData, setNemesisData] = useState<RowData[]>(rowData);

  const deleteRow = (delRowID: string) => {
    const updatedData = nemesisData.filter((row) => row.data.ID !== delRowID);
    setNemesisData(updatedData);
  };

  const nemesisComponents = nemesisData.map((dat) => {
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
