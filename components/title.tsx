import {Box} from "@chakra-ui/react";

interface title {
    title:string,
}
const Title:React.FC<title> = ({title}) => {
  return (
    <>    
        <Box color='#3182ce' fontSize="40px" id={title} mb={'20px'}>
          {title}
        </Box>
    </>
  )
}


export default Title;