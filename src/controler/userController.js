import { Router } from "express";

const router = Router()

/* cadastrar*/
router.post('/signup', (req, res)=>{
    res.send('SIGNUP /')
})

/* logar*/
router.post('/login', (req, res)=>{
    res.send('LOGIN /')
})

export default router