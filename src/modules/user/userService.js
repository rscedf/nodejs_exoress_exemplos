let users = [] /*Está substituindo banco de dados  */

/*cria const getUserByEmail e percorre users verificando se o obj dele é igual variavelEmail  */
const getUserByEmail = (variavelEmail) =>
    users.find((obj)=> obj.email === variavelEmail)


export const signup = (data)=>{
    if(getUserByEmail(data.email)){ /*se a função retornar true  */
        console.log("Existe Email")
    }else{
        users.push(data)
    }
    return true
}