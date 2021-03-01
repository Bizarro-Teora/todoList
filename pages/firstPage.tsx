import { Button, HStack, Container } from "@chakra-ui/react";
import {Page} from  "../dataStructure/page";
import Title from  "../components/title";

interface firstPage {
    title:string,
    onChange: any,
}
const FirstPage:React.FC<firstPage> = ({title, onChange}) => {
    const buttons = [Page.SignUp, Page.SignIn];

    

    return (
        <>  
            <Title title={title}/>

            <Container centerContent={true}>
            <HStack spacing={8}>
            {buttons.map((b, i) => 
                <Button key={i} colorScheme="blue" onClick={() => onChange(b)}>
                    {b}
                </Button>)}            
            </HStack>
            </Container>
        </>
    );
}

export default FirstPage;