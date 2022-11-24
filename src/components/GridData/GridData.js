import { AgGridReact } from "ag-grid-react";
import { ColumnApi, GridApi } from "ag-grid-community";
//import '@ag-grid-community/all-modules/dist/styles/ag-theme-alphine.css'
import 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faUnderline } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./EditModal";

const GridData = () => {
  
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState(false);
    const onGridReady = () => {

    }

    const onCellClicked = (params) =>  {
        // If edit operation clicked
        if(params.colDef.field == 'edit')
        {
         console.log(params.data)
         setEditData(!editData) 
        }

    }
    
  const getUserDetails = () => {
   let  apiUrl = "https://reqres.in/api/users?page=2"
   axios.get(apiUrl,{
    }).then((response) => {
       setData(response.data.data)
       console.log(response.data) 
    })
  }
  
  useEffect(() => {
    getUserDetails()
  },[])

    const columnDef = [
        { field: 'id', headerName: 'Id', editable: false },
        { field: 'email', headerName: 'Email', editable: false },
        { field: 'first_name', headerName: 'First Name', editable: false },
        { field: 'last_name', headerName: 'Last Name', editable: true },
        { field: 'edit', headerName: 'Action', editable: false, cellRenderer: () => {
            return <span><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></span>
        } }
    ]
    debugger;
    return(
        <>
        <div className="ag-theme-alpine overviewContent">
            <AgGridReact
                rowData={data}
                columnDefs={columnDef}
                onCellClicked={onCellClicked}
                onGridReady={onGridReady}>
            </AgGridReact>
        </div> 
        {editData &&
            <EditModal open={editData}></EditModal>
        }
        </>
        

        
            
    )

}
export default GridData;