import { Box,Image,Text,Button,Link } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import emptycart from "../../assest/heartgif.png"
export default function Emptyshortlist(){
    return (
        <Box backgroundColor={"white"} gap={"20px"}  width={{base:"100px",sm:"100%",md:"500px",lg:"80%"}} margin="auto" p={"50px"} display="flex" flexDirection={"Column"} alignItems="center" justifyContent="center" >
            <Image src={emptycart} width="60%" margin="auto"  />
            <Text fontWeight={"bold"} fontSize="22px" textColor={"rgb(255,112,67)"} >No Product Shortlisted yet!</Text>
            <Link as={routerLink} to="/" style={{textDecoration:"none"}}><Button colorScheme='orange' >Start Shopping</Button></Link>
        </Box>
    )
}