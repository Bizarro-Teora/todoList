import {Page} from  "./dataStructure/page";
import FirstPage from "./pages/firstPage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dash_board";
import List from "./pages/list";
import Menu from "./components/menu";
import {useState} from 'react';
import { Container} from "@chakra-ui/react";

interface app {
  whichPage: Page,
}

const App:React.FC<app> = ({whichPage}) => {
  const [state, setstate] = useState(whichPage);

  let currentPage = <> </>;
  let menu =   <Menu onClick={setstate} visibility={'visible'}  text='Back' page={Page.FirstPage}/>;
  


  if(state === Page.FirstPage){
    menu = <Menu onClick={setstate} visibility={'hidden'}  text='Back' page={Page.FirstPage}/>;
    currentPage = <FirstPage title='To-Do List' onChange={setstate} />
  }
  else if(state === Page.SignUp)
    currentPage = <SignUp title='Sign Up' onChange={setstate}/>
  else if(state === Page.SignIn)
    currentPage = <SignIn title='Sign In' onChange={setstate}/>
  else if(state === Page.DashBoard){
    menu =    <Menu onClick={setstate} visibility={'visible'}  text='Log out' page={Page.FirstPage}/>;
    currentPage = <Dashboard title='Dashboard' onChange={setstate}/>
  }
  else if(state === Page.List){
    menu = <> </>;
    currentPage = <List title='List' onChange={setstate}/>
  }
  return (
      <> 
          <Container centerContent={true} >
            {menu}
            {currentPage}
          </Container>
      </>
    )
}

export default App;
