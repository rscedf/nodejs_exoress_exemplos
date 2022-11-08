import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'

import { createPost, getPost } from './postService'

const router = Router()

/* criar post*/
router.post('/', verifyAccessToken, (req, res)=>{   
    
    try {              
        const post = createPost(req.body, req.user)        
        res.status(200).send(post)        
    } catch (error) {
        res.status(500).send(error.message) 
    }
})

/* Listar POST- :id? = variável de id, se não for passado nada lista todos*/
router.get('/:id?', verifyAccessToken, (req, res)=>{
    try {
        const post = getPost(req.params.id)
        res.status(200).send(post)
    } catch (error) {
        if(error.message === 'post_nao_existe'){
            res.status(400).send(error.message)
        }
        res.status(500).send(error.message)
    }
})

export default router