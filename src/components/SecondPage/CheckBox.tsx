import React from "react";
import checkData from "../../model/CheckData"
import { Box,Checkbox,FormControlLabel } from "@mui/material"


const CheckBox = () => {
    const [checked, setChecked] = React.useState([true, false]);
    
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  return (
    <div>
        {
            checkData.map((item)=>
            <>
                    <FormControlLabel
            label={item.department}
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
        {
            item.sub_departments.map((item1)=>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
            label={item1}
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      /></Box>)
        }
            </>
        
            )
        }
    </div>
  )
}

export default CheckBox