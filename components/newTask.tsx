import { Input, InputGroup, InputLeftElement,} from "@chakra-ui/react";
import {EditIcon,} from "@chakra-ui/icons";


interface  newTask{
    onChange?: any,
    state?: any,
    type:string,
}

const NewTask:React.FC<newTask> = ({onChange, state, type}) => {
    return (
      <>  
        
        <InputGroup alignSelf='center' m={'5px'}>
            <InputLeftElement
            pointerEvents="none"
            children={<EditIcon color="gray.300" />}
            />
            <Input type="text" id={type} placeholder={type} onChange={event => {
                                        onChange(event.target.value as string);
                                      }}/>
        </InputGroup>

    </>
    )
}

export default NewTask