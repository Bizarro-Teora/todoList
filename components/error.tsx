import { Box} from "@chakra-ui/react";


interface  errorInterface{
    which: number,
}

const Error : React.FC<errorInterface> = ({which}) => {
    let message;
    switch(which) {
        case 1: message = 'This email is already linked to an account';
            break;
        case 2: message = 'The password must have at least 8 characters.';
            break;
        case 7: case 11: case 13: case 7*11: case 11*13: case 13*7: case 7*11*13:
            message = 'All fields are mandatory!';
            break;
        case 4: message = "That's not a valid email address.";
            break;
        case 5: message = "This email is not linked to any account. Please, try again.";
            break;
        case 6: message = "The password does not match. Please, try again.";
            break;
        default: message = '';
    }
    
    return (
    <Box color='red'>  
        {message}
    </Box>
    )
}

export default Error



