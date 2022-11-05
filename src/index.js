import * as express from 'express'
const app = express()

app.get('/', (req, res)=>{
    res.send('GET /')
})

app.post('/', (req, res)=>{
    res.status(201).send('POST /')
})

app.put('/', (req, res)=>{
    res.status(400).send('PUT /')
})

app.patch('/', (req, res)=>{
    res.send('PATCH /')
})

app.delete('/', (req, res)=>{
    res.send('DELETE /')
})

app.listen(3000, ()=> console.log(`ONLINE htpp://localhost:3000`))