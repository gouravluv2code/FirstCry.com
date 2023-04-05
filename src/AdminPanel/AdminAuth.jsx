import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/AdminAuth/action";
import logo from "../assest/Kids fashion logo.png";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth } = useSelector((store) => store.adminAuth);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));

    setEmail("");
    setPassword("");
   
  };

  if(auth){
    // return(<h2>Welcome, you are now logged in. Routing is under process, please wait... Your patience is appreciated.</h2>)
    toast({
        title: "Login Successfull!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
   return <Navigate to='/admin' />
  }
  

  return (
    <Container>
      <LoginForm>
        <Logo src={logo} alt="Logo" />
        <Title>User Login</Title>
        <Subtitle>{auth ? "Login successful" : "Login to continue"}</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">Login</Button>
        </Form>
      </LoginForm>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const LoginForm = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: normal;
  color: #999999;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
  color: #333333;
  outline: none;
  &:focus {
    background-color: #ffffff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #333333;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #222222;
  }
`;
