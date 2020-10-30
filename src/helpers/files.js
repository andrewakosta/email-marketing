export const sortDataFile =   data => {
     let  emails = [] 
    try{
        data.forEach(element => {
            let user = {}
            if(element.hasOwnProperty("E-mail")){
               user = {
                   email:element["E-mail"],
                   status:"allow"
               }
               if(element.hasOwnProperty("Name")){
                user.name = element["Name"]   
             }
                emails.push(user)
            }
        });
        return emails
    }catch(error){
        console.log("Error iterando el array" + error);
    }
}