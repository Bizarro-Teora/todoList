import { Input, InputGroup, InputLeftElement,
    FormControl,} from "@chakra-ui/react";
import {AtSignIcon, LockIcon} from "@chakra-ui/icons";


interface  emailANDpassword{
    onChange: any,
    checkF?: any,
    setErrorF?: any,
    error_?: number,
    state: any,
    checkPass: boolean,
}

const EmailANDpassword:React.FC<emailANDpassword> = ({onChange, state, checkF, setErrorF, checkPass, error_}) => {
    return (
      <>  
        <FormControl  isInvalid={(error_ !== 0 && error_ as number%13 === 0) || error_ === 1 || error_ ===4 || error_ ===5}>            
        
        <InputGroup m={'5px'}>
            <InputLeftElement
            pointerEvents="none"
            children={<AtSignIcon color="gray.300" />}
            />
            <Input type="email" id="email" placeholder="e-mail" onChange={event => {
                                        let user = state;
                                        user.email = event.target.value as string;
                                        onChange(user);
                                        
                                      }}/>
        </InputGroup>
        </FormControl>  

        <FormControl   isInvalid={error_ === 2 || error_ === 6}>            
        
        <InputGroup m={'5px'}>
            <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
            />
            <Input type="password" id="password" placeholder="password" onChange={event => {
                                        const pw = document.querySelector('#password') as Element;
                                        pw.removeEventListener('keypress', enter);
                                        pw.addEventListener('keypress', enter);
                                        let user = state;
                                        user.data.pssw = event.target.value as string;
                                        onChange(user);
                                        if(checkPass)
                                            checkF(user, setErrorF);
                                      }}/>
        </InputGroup>
        </FormControl>

    </>
    )
}

export default EmailANDpassword

const enter = (e:Event) => {
  
    if((e as KeyboardEvent).key === 'Enter'){
    clearTimeout();
    setTimeout(() => {
        if (document.getElementById("submit") !== null)
            (document.getElementById("submit") as HTMLElement).focus();
    }
    
    , 100); 
    }
  
    
  }