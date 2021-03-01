import { Button, Container, HStack} from "@chakra-ui/react";
import {Page} from  "../dataStructure/page";
import Title from  "../components/title";
import EmailANDpassword from "../components/emailANDpassword";
import {useState} from 'react';
import Error from "../components/error";

interface signIn {
    title:string,
    onChange: any,
}


const SignIn:React.FC<signIn> = ({title, onChange}) => {  
  const [state, setstate] = useState({ email:"", data: {pssw: "",}});
  const [error_, setError] = useState(0);



  return (
    <>    
        <Title title={title}/>

        
        
        <EmailANDpassword onChange={setstate} state={state} checkPass={false} error_={error_}/>

        <Container centerContent={true} mt={'10px'}>
        <HStack spacing={8}>
        <Button colorScheme="blue" id='submit' onClick={() => login(state, setError, onChange)}>
          Log In
        </Button>
        
        </HStack>
        </Container>

        <Container centerContent={true} mt={'10px'}>
          <Error which={error_}/>
        </Container>
    </>
  );
}

export default SignIn;

const login = (state: any, setError: any, onChange: any) => {
  
  const allGood = check(state, setError);
  
  if (allGood) {
    
    localStorage.setItem('email', state.email);
    onChange(Page.DashBoard);

  }

  
}

const check = (state: any, setError: any) => {

  let allGood = true;
  setError(0);

  if (localStorage.getItem(state.email) === null){
    setError(5);
    allGood = false;
  }
  else if (JSON.parse(localStorage.getItem(state.email) as string).pssw !== state.data.pssw){
    setError(6);
    allGood = false;
  }


  return (allGood);



}