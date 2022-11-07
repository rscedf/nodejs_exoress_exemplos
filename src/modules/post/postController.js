import { Router } from "express";
import { verifyAccessToken } from "../../utils/auth";

const router = Router()

/* criar post*/
router.post('/', verifyAccessToken, (req, res)=>{
    res.send('CREATE POST /')
})

/* Listar POST- :id? = variável de id, se não for passado nada lista todos*/
router.get('/:id?', verifyAccessToken, (req, res)=>{
    res.send('GET POST /')
})

export default router