import { Context } from "../../Context/Context";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';

export default function MainBody(){
    const {data, setData, expandedRows, setExpandedRows} = useContext(Context);

    const deleteRow = (delRowId : string) => {
        const updatedData = data.filter((row) => row.data.ID !== delRowId);
        setData(updatedData);
    }

    const showSubRow = (showRowID : string) => {
        setExpandedRows((prevState) => ({
        ...prevState,
        [showRowID]: !prevState[showRowID],
        }));
    };

    const mainComponents = data.map((dat, index) => {
        const { 
            Name, 
            ID, 
            Gender, 
            Ability, 
            "Minimal distance" : minimalDistance, 
            Weight,
            Born,
            "In space since" : inSpaceSince,
            "Beer consumption (l/y)" : beerConsumption,
            "Knows the answer?" : knowAsnwer
          } = dat.data

    const rowColor = index % 2 === 0 ? "component--box even" : "component--box odd"  
    
    const isExpanded = expandedRows[ID];

        return <div className={rowColor}>
                <button onClick={() => showSubRow(ID)} className="caret--btn" style={{display:`${ID == 48 && "none"}`}}><FontAwesomeIcon icon={faCaretDown} /></button>
                <p>{ID}</p>
                <p>{Name}</p>
                <p>{Gender}</p>
                <p>{Ability}</p>
                <p>{minimalDistance}</p>
                <p>{Weight}</p>
                <p>{Born}</p>
                <p>{inSpaceSince}</p>
                <p>{beerConsumption}</p>
                <p>{knowAsnwer}</p>
                <button className="delete--btn" onClick={() => deleteRow(ID)}>X</button>
                {isExpanded && (
                <>
                <h1>{Name}</h1>
                </>
        )}
        </div>
    })
    return(
        <main>
            {mainComponents}
        </main>
    );
}
