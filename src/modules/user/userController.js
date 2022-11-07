import { Router } from "express";
import {signup} from './userService'
    

const router = Router()

/* cadastrar*/
router.post('/signup', (req, res)=>{
    try{
        const answer = signup(req.body)
        res.send(answer)
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
    res.send('LOGIN /')
})

export default router