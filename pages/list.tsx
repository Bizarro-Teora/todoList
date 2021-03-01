import { Button, HStack, Container, Box, Checkbox, } from "@chakra-ui/react";
import {Page} from  "../dataStructure/page";
import Title from  "../components/title";
import NewTask from "../components/newTask";
import {useState} from 'react';
import {DeleteIcon} from "@chakra-ui/icons";

interface list {
    title:string,
    onChange: any,
}
const List:React.FC<list> = ({title, onChange}) => {    

    const email = localStorage.getItem('email');
    const data = JSON.parse(localStorage.getItem(email as string) as string) ;
    let listNameOld = data.list;
    
    const [listName, setListName] = useState('');
    const [newItemField, setNewItemField] = useState(<></>);     
    const [newItem, setNewItem] = useState('');
    const [allItems, setAllItems] = useState<string[][]>((JSON.parse(localStorage.getItem(email as string) as string).lists[listNameOld]));    
    const [addText, setAddText] = useState('add');
    const [option, setOption] = useState('0');

    console.log([Object.keys(JSON.parse(localStorage.getItem(email as string) as string).lists[listNameOld])]);


    return (
        <>    
        <Box ml ='73%' mt='10px' >
            
        <HStack spacing={3}> 
            <Button  colorScheme="blue" size="xs" onClick={() => {
                        setNewItemField(
                                        
                                        <NewTask onChange={setListName} type={'to-do list'}/>
                                                                        
                                    );
                                    setOption('2');
                                    setAddText('add');
                                    setTimeout(() =>
                                    (document.getElementById("to-do list") as HTMLElement).focus(), 100); 
                    }}>
                        Rename
            </Button>

            <Button  colorScheme="blue" size="xs" onClick={() => {
                                                        const email = localStorage.getItem('email');
                                                        const data = JSON.parse(localStorage.getItem(email as string) as string) ;
                                                        data.list = '';
                                                        
                                                        localStorage.setItem(email as string, JSON.stringify(data));
                                                        
                                                        onChange(Page.DashBoard);}}>
                Cancel
            </Button> 
            </HStack>
        </Box>


            <Title title={listNameOld}/>
            

            
            <Box id='box' mb={'10px'}>
            <HStack spacing={1}> 
                {newItemField}
                <Button  visibility={newItem === '' && listName === ''? 'collapse': 'visible'} colorScheme="blue" onClick={ () => {
                                        setAddText('<<');

                                        if(option === '1'){
                                            const aux = [...allItems.concat([[newItem,'false']])];
                                            setAllItems(aux);
                                        }
                                        if(option === '2'){
                                            const email = localStorage.getItem('email');
                                            const data = JSON.parse(localStorage.getItem(email as string) as string) ;
                                            
                                            if(!(listName in data.lists)){
                                            data.list = listName;
                                            data.lists[listName] = data.lists[listNameOld];
                                            delete data.lists[listNameOld];
                                            
                                            
                                            localStorage.setItem(email as string, JSON.stringify(data));
                                            listNameOld = listName;
                                            }
                                        }
                                        

                                        setNewItem('');                                        
                                        setListName('');
                                        setNewItemField(<></>);
                                        setOption('0');
                                    }}>
                                    {addText}
                                    </Button>
            </HStack>
            </Box>            

            <Container centerContent={true}>
            <HStack spacing={8}>
                <Button  colorScheme="blue" onClick={() => {
                    setNewItemField(
                                    
                                    <NewTask onChange={setNewItem} type={'new item'}/>
                                                                      
                                );
                                setOption('1');
                                setAddText('add');
                                setTimeout(() =>
                                (document.getElementById("new item") as HTMLElement).focus(), 100); 
                }}>
                    New Item
                </Button>
             
                <Button  colorScheme="blue" onClick={() => {
                                                            saveList(allItems);
                                                            onChange(Page.DashBoard);
                                                            
                                                            }}>
                Save
            </Button>  
                                        
            </HStack>
            </Container>

            <Box id='box' m={'20px'} style={{width: '80%', backgroundColor: '#dcecf7', borderRadius:'20px' }}
            onChange={() => {
                
            }}>
                {allItems.map((item, i) => 
                    <div  draggable="true"  key={i} style={{color: "#3182ce", fontSize:"20px", margin: '10px'}} >
                        
                        <HStack spacing={5} >
                        <DeleteIcon color="gray.400" onClick={() => {
                            
                             const aux1 = [...allItems.slice(0,i)];
                             const aux2 = [...allItems.slice(i+1,allItems.length)];
                             setAllItems(aux1.concat(aux2));

                             
                        }}/>
                        <Checkbox  isChecked={item[1] === 'true'} colorScheme="blue" defaultIsChecked={item[1] === 'true'} style={{borderColor : '#3182ce'}}
                        onChange={() => {
                            const auxCheck = [...allItems];
                            auxCheck[i][1] = auxCheck[i][1] === 'true'? 'false':'true';
                            setAllItems(auxCheck);
                        }}> 
                        {`${item[0]}`}
                        </Checkbox>
                            
                        </HStack>
                        
                        
                    </div>
                )}
            </Box>


            <Container centerContent={true}>
            <HStack spacing={8}>
              
             
            </HStack>
            </Container>
        </>
    );
}

export default List;

const saveList = (items:any) => {
    
    const email = localStorage.getItem('email');
    const data = JSON.parse(localStorage.getItem(email as string) as string) ;
    const listName = data.list;
    data.lists[listName] = [];

    for(let item of items){
        data.lists[listName].push(item);
    }
    localStorage.setItem(email as string, JSON.stringify(data));
    console.log(localStorage.getItem(email as string));
                                        
                                       

}