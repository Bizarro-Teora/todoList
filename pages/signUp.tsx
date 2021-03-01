import {  Button, 
          Input,
          InputGroup, 
          InputLeftElement, 
          Container, 
          HStack,
          FormControl,
          } from "@chakra-ui/react";
import {Page} from  "../dataStructure/page";
import Title from  "../components/title";
import EmailANDpassword from "../components/emailANDpassword";
import CreateUser from "../dataStructure/user";
import {useState} from 'react';
import Error from "../components/error";

interface signUp {
    title:string,
    onChange: any,
}
const SignUp:React.FC<signUp> = ({title, onChange}) => {
    const [state, setstate] = useState(CreateUser({ email:"", fName:"", lName:"",pssw: "",}));
    const [error_, setError] = useState(0);
    const name = ["First Name", "Last Name"];
    const key = ['fName' , 'lName'];
    const errorNum = [7 , 11];

    //localStorage.clear();

  return (
    <>    
        <Title title={title}/>
        

        {name.map((name, i) => 
          <FormControl  isInvalid={error_ !== 0 && error_%errorNum[i] === 0} key={i}>     
            <InputGroup m={'5px'} >
                <InputLeftElement
                pointerEvents="none"
                />
                <Input type="text" id={name} placeholder={name} onChange={event => {
                                        let user = state;
                                        user.data[key[i] as 'fName' | 'lName'] = event.target.value as string;
                                        setstate(user);
                                      }}/>
            </InputGroup>            
          </FormControl>

        )}
        
        
        <EmailANDpassword onChange={setstate} state={state} checkF={check} setErrorF={setError} checkPass={true} error_={error_}/>

          
        <Container centerContent={true} mt={'10px'}>
        <HStack spacing={8}>
        
        <Button colorScheme="blue" id='submit' onClick={() => submit(state, setError, onChange)}>
          Submit
        </Button>
        
        </HStack>
        </Container>

        <Container centerContent={true} mt={'10px'}>
          <Error which={error_}/>
        </Container>
    </>
  );
}

export default SignUp;

const submit = (state: any, setError: any, onChange: any) => {
  
  const allGood = check(state, setError);
  
  if (allGood) {
    state.data.lists = {};   
    state.data.list = '';
    localStorage.setItem(state.email, JSON.stringify(state.data));
    localStorage.setItem('email', state.email);
    onChange(Page.DashBoard);

  }


}

const check = (state: any, setError: any) => {

  let allGood = true;
  setError(0);

  const fName_empty = state.data.fName.length - (state.data.fName.split(' ').length-1)  === 0;
  const lName_empty = state.data.lName.length - (state.data.lName.split(' ').length-1)  === 0;
  const email_empty = state.email.length      - (state.email.split(' ').length-1)       === 0;
  let emptyError = 1;

  if (fName_empty || lName_empty || email_empty){
    emptyError = fName_empty? emptyError*7:emptyError;
    emptyError = lName_empty? emptyError*11:emptyError;
    emptyError = email_empty? emptyError*13:emptyError;
    setError(emptyError);
    allGood = false;
  }
  else if (localStorage.getItem(state.email) != null){
    setError(1);
    allGood = false;
  }
  else if (state.email.split('@').length < 2){
    setError(4);
    allGood = false;
  }
  else if (state.data.pssw.length < 8){
    setError(2);
    allGood = false;
  }


  return (allGood);



}