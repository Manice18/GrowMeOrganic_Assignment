import { Box, Button,TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { access } from "../../features/access"
import { useNavigate } from "react-router-dom"
import { SyntheticEvent } from "react"

const Form = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (event: SyntheticEvent) =>{
    event.preventDefault()
    dispatch(access(true))
    navigate("/information")
  }
  return (<div style={{display: 'flex',justifyContent:'center',alignItems:'center',minHeight:'90vh'}}>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <form action="/information" onSubmit={(event)=> handleSubmit(event)}>
        <h1>Enter User Data</h1>
        <TextField 
        sx={{marginTop: "20px"}}
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        required
        />
        <br />
        <TextField 
        sx={{marginTop: "20px"}}
        id="outlined-basic" 
        label="Number" 
        type="number" 
        variant="outlined"
        required/>
        <br />
        <TextField 
        sx={{marginTop: "20px"}}
        id="outlined-basic" 
        type="email" 
        label="Email" 
        variant="outlined"
        required/>
        <br />
        <Button 
        sx={{marginTop: "20px"}} variant="outlined"
        type="submit" 
        >
          Submit
        </Button>
        </form>
    </Box>
    </div>
  )
}

export default Form