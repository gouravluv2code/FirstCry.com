import axios from "axios";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
} from "@chakra-ui/react";
import logo from "../assest/Kids fashion logo.png";
import { useDispatch,useSelector } from "react-redux";
import { getToken } from "../redux/LoginReducer/action";
import { Navigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  let dispatch=useDispatch();
  let isAuth = useSelector((store)=>{
    return store.loginReducer.isAuthenticated;
  })
  let userId= useSelector((store)=>{
    return store.loginReducer.user;
  })
  console.log('ID:',userId);

  console.log(isAuth);

  function handleLogin(e) {
    e.preventDefault();
   
    dispatch(getToken(email,password));
    if(email=='' || password==''){
      setShowError(true)
    }
   
  }

  if(isAuth){
    // return(<h2>Welcome, you are now logged in. Routing is under process, please wait... Your patience is appreciated.</h2>)
   return <Navigate to='/' />
  }

  return (
    <Box maxW="md" mx="auto" my={8} p={6} borderWidth={1} rounded="lg">
      <img src={logo} width={200} style={{display:"block",margin:"auto",justifyContent:"center"}} />
      <Heading as='h1' size='md' pt='5' pb='5' >Login</Heading>
      <form >
        {showError && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            <AlertTitle mr={2}>Invalid credentials</AlertTitle>
            <AlertDescription>
              The email or password you entered is incorrect.
            </AlertDescription>
          </Alert>
        )}

        <Stack spacing={3}>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>

          <Button type="button" onClick={handleLogin} colorScheme="orange" size="lg">
            Sign in
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
