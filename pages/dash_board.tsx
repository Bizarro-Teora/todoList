import {Page} from  "../dataStructure/page";
import Title from  "../components/title";
import { Button, HStack, Container, Box } from "@chakra-ui/react";
import NewTask from "../components/newTask";
import {useState} from 'react';
import {DeleteIcon} from "@chakra-ui/icons";

interface dashboard {
    title:string,
    onChange: any,
}
const Dashboard:React.FC<dashboard> = ({title, onChange}) => {
    const email = localStorage.getItem('email');
    const [newItemField, setNewItemField] = useState(<></>);     
    const [newItem, setNewItem] = useState('');
    const [allItems, setAllItems] = useState<string[]>(Object.keys(JSON.parse(localStorage.getItem(email as string) as string).lists));    
    const [addText, setAddText] = useState('add');


    return (
        <>    
            <Title title={title}/>

            <Box id='box' mb={'10px'}>
            <HStack spacing={1}> 
                {newItemField}
                <Button  visibility={newItem === ''? 'collapse': 'visible'} colorScheme="blue" onClick={ () => {
                                        setAddText('<<');
                                        const data = JSON.parse(localStorage.getItem(email as string) as string) ;
                                        
                                        if(!(newItem in data.lists)){
                                            data.list = newItem;
                                            data.lists[newItem] =  [];
                                            localStorage.setItem(email as string, JSON.stringify(data));
                                            const aux = [...allItems.concat([newItem])];
                                            setAllItems(aux);

                                            setTimeout(() => onChange(Page.List), 500);
                                        }
                                        

                                        
                                        

                                        setNewItem('');
                                        setTimeout(() => setNewItemField(<></>), 200);
                                    }}>
                                    {addText}
                                    </Button>
            </HStack>
            </Box>            

            <Container centerContent={true}>
            <HStack spacing={8}>
                      
            




            <Container centerContent={true}>
            <HStack spacing={8}>
                <Button  colorScheme="blue" onClick={() => {
                    setNewItemField(
                                    
                                    <NewTask onChange={setNewItem} type={'new list'}/>
                                                                      
                                );
                                setAddText('add');
                                setTimeout(() =>
                                (document.getElementById("new list") as HTMLElement).focus(), 100); 
                }}>
                    New List
                </Button>
             
                                        
            </HStack>
            </Container>

            </HStack>
            </Container>

            <Box id='box' m={'20px'} style={{width: '80%', backgroundColor: '#dcecf7', borderRadius:'20px' }}
            onChange={() => {
                
            }}>
                {allItems.map((item, i) => 
                    <div  key={i} style={{color: "#3182ce", fontSize:"20px", margin: '10px'}} >
                        
                        <HStack spacing={5}>
                        <DeleteIcon color="gray.300" onClick={() => {

                            const data = JSON.parse(localStorage.getItem(email as string) as string);
                            delete data.lists[item];
                            localStorage.setItem(email as string, JSON.stringify(data));
                            console.log(JSON.parse(localStorage.getItem(email as string) as string));
                            
                             const aux1 = [...allItems.slice(0,i)];
                             const aux2 = [...allItems.slice(i+1,allItems.length)];
                             setAllItems(aux1.concat(aux2));

                             
                        }}/>
                        
                        <Box onClick={() => {
                            const email = localStorage.getItem('email');
                            const data = JSON.parse(localStorage.getItem(email as string) as string) ;
                            data.list = item;
                            
                            localStorage.setItem(email as string, JSON.stringify(data));
                            setTimeout(() => onChange(Page.List), 50);
                        }}
                        >{`${item}`}</Box>
                            
                        </HStack>
                        
                        
                    </div>
                )}
            </Box>








        </>
    );
}

export default Dashboard;