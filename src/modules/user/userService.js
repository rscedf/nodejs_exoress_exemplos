import {generateAccessToken} from '../../utils/auth'

let users = [] /*Está substituindo banco de dados  */


/*cria const getUserByEmail e percorre users verificando se o obj dele é igual variavelEmail  */
const getUserByEmail = (variavelEmail) =>
    users.find((obj)=> obj.email === variavelEmail)


export const signup = (data)=>{    
    if(getUserByEmail(data.email)) throw new Error('email_existente')/*se a função retornar true  */
    
    users.push(data)
    return generateAccessToken({ email: data.email })
     

}

export const login = (data)=>{
    const user= getUserByEmail(data.email)
    if(!user) throw new Error('email_nao_encontrado')

    if(user.password !== data.password) throw new Error('senha_incorreta')

    return generateAccessToken({email:data.email})
}