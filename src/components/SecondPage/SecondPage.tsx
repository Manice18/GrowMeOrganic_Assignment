import { FC,useState,useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import CheckBox from "./CheckBox";
import CircularProgress from '@mui/material/CircularProgress';

interface UserDetail{
        userId: number,
        id: number,
        title: string,
        body: string,
}


const SecondPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
    const egData = {
      userId: 0,
      id: 0,
      title: "",
      body: ""
    }

    const [data, setData] = useState<UserDetail>(egData)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
          setData(data.data)
        })
        setTimeout(()=>{
          setIsLoading(false);
        },3000);
    },[])
    const columns: GridColDef[] = [
      {field: 'userId', headerName: 'UserId',width: 90},
      {
        field: 'id', 
        headerName: 'ID',
        width: 150
      },
      {
        field: 'title', 
        headerName: 'TITLE',
        width: 490
      },
      {
        field: 'body', 
        headerName: 'BODY',
        width: 150,
        editable: true,
      },
    ];
    const rows:any = data
  return (
    <>
    {
      isLoading===true?<div style={{display: 'flex',justifyContent:'center',alignItems:'center',minHeight:'90vh'}}><CircularProgress /></div>  :
    <>
    <h1>Component 1 (Task 3)</h1>
    <Box sx={{height: '50%', width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        />
      <h1>Component 2 (Task 4)</h1>
      <p>//sorry i couldn't complete the code as it was asked</p>
      <CheckBox/>
    </Box>
    </>
    }
    </>
  )
}

export default SecondPage