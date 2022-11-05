import { Router } from "express";

const router = Router()

/* criar post*/
router.post('/', (req, res)=>{
    res.send('CREATE POST /')
})

/* Listar POST- :id? = variável de id, se não for passado nada lista todos*/
router.get('/:id?', (req, res)=>{
    res.send('GET POST /')
})

export default router