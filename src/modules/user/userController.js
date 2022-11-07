import { Router } from "express";
import {signup, login} from './userService'
    
const AUTH_COOKIE_NAME = 'authorization'
const router = Router()

/* cadastrar*/
router.post('/signup', (req, res)=>{
    try{
        const token = signup(req.body)
        res.cookie(AUTH_COOKIE_NAME, token).status(201).send()
    }catch(erro){
        if(erro.message=== 'email_existente'){
            res.status(400).send(erro.message)
        }else{
            res.status(500).send(erro.message)
        }
        
    }
})

/* logar*/
router.post('/login', (req, res)=>{
    try{
        const token = login(req.body)
        res.cookie(AUTH_COOKIE_NAME, token).status(200).send()
    }catch(erro){
        if(erro.message === 'email_nao_encontrado' || erro.message === 'senha_incorreta')
            return res.status(400).send(erro.message)
        
        res.status(500).send()
    }    
})

export default router