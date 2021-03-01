import {Box, Button} from "@chakra-ui/react";
import {Page} from  "../dataStructure/page";


interface  menu{
    onClick: (pag:Page) => void,
    text: string,
    page: Page,
    visibility: string;
}

const Menu:React.FC<menu> = ({onClick, text, page, visibility}) => {
    
    return (
      <>  
        
        <Box ml ='90%' mt='10px' >
            <Button visibility={visibility as 'visible' | 'hidden'}  colorScheme="blue" size="xs" onClick={() => {
                if(text === 'Log out')
                    localStorage.setItem('email', '');
                onClick(page);
                
                }}>
                {text}
            </Button> 
        </Box>

    </>
    )
}

export default Menu