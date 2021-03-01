interface createUser {
    email: string | undefined,
    fName: string | undefined,
    lName: string | undefined,
    pssw:  string | undefined,
};
 
 const CreateUser = ({email, fName, lName, pssw}: createUser) =>{
    return ({email,
            data : {fName, lName, pssw,},
        })
 }

 export default CreateUser;
