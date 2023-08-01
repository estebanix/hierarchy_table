import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import NemesisNav from "../Nemesis/NemesisNav";
import NemesisBody from "../Nemesis/NemesisBody";

interface RowData {
  data: {
    ID: string;
    "Character ID": string;
    "Is alive?": boolean;
    Years: number;
  };
  children: {
    has_secrete: {
      records: any[];
    };

  };
}

interface CharacterBodyProps {
  rowData: RowData[];
}

export default function CharacterBody(props: CharacterBodyProps) {
  const { rowData } = props;
  const [characterData, setCharacterData] = useState<RowData[]>(rowData);

  const { expandedRows, setExpandedRows } = useContext(Context);

  const deleteRow = (delRowID: string) => {
    const updatedData = characterData.filter((row) => row.data.ID !== delRowID);
    setCharacterData(updatedData);
  };

  const showSubRow = (showRowID: string) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [showRowID]: !prevState[showRowID],
    }));
  };

  const characterComponents = characterData.map((dat) => {
    const { ID, "Character ID": characterID, "Is alive?": isAlive, Years } = dat.data;
    const isExpanded = expandedRows[ID];
    return (
      <div className="char-nav--container sub-data" style={{ flexDirection: "column" }} key={ID}>
        <div className="char-nav--container sub-data" style={{ width: "100%" }}>
          <button onClick={() => showSubRow(ID)} className="caret--btn" style={{ left: "90px" }}>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <p>{ID}</p>
          <p>{characterID}</p>
          <p>{isAlive}</p>
          <p>{Years}</p>
          <button onClick={() => deleteRow(ID)}>X</button>
        </div>
        {isExpanded && (
          <>
            <NemesisNav />
            <NemesisBody rowData={dat.children.has_secrete.records} />
          </>
        )}
      </div>
    );
  });

  return <>{characterComponents.length ? characterComponents : "No data"}</>;
}
