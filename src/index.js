import * as express from 'express'

const app = express()

import userController from './controler/userController'
import postController from './controler/postController'

app.use('/user', userController)
app.use('/post', postController)


app.listen(3000, ()=> console.log(`ONLINE htpp://localhost:3000`))