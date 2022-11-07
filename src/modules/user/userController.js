import { Router } from "express";
import {signup} from './userService'
    

const router = Router()

/* cadastrar*/
router.post('/signup', (req, res)=>{
    const answer = signup(req.body)
    res.send(answer)
})

/* logar*/
router.post('/login', (req, res)=>{
    res.send('LOGIN /')
})

export default router