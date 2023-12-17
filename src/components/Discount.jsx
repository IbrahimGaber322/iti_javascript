import products from "../constants/products";

import { TextField, Box, Typography } from "@mui/material";
const Discount =()=>{
     const discount = 12;
    const calcDisc = (price)=>{
        let result = price -(price*discount/100);
        return Math.ceil(result);
    }
    return(
        <Box sx={{width:"100%", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {
                products.map((p)=>(
                    <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", m:3, width:"500px"}}>
                    <Typography>Title: {p.title}</Typography>
                    <Typography>Description: {p.description}</Typography>
                    <Typography>Price: {p.price}</Typography>
                    <Typography>Category: {p.category}</Typography>
                    <Typography>Price after discount: {calcDisc(p.price)}</Typography>
                    </Box>
                ))
            }
        
      </Box>
    );
}

export default Discount;