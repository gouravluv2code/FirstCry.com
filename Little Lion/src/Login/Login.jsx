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
} from "@chakra-ui/react";
import logo from "../assest/Kids fashion logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);


  function handleLogin(e) {
    e.preventDefault();

    

    axios.post(`https://reqres.in/api/register`,{"email":email,"password":password}).then((res)=>console.log(res)).then((err)=>console.log(err))

    console.log(email,password);
   
  }

  return (
    <Box maxW="md" mx="auto" my={8} p={6} borderWidth={1} rounded="lg">
      <img src={logo} width={200} style={{display:"block",margin:"auto",justifyContent:"center"}} />
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
