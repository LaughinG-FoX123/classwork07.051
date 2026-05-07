import express from "express"
import { Books, db, Users } from "./models/index.js"
import UserControler from "./controlers/userControler.js"
import BookControler from "./controlers/bookControler.js"

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    
    res.send("здарово заебал")
})

app.get('/users', UserControler.getAll)
app.get('/user/:id', UserControler.getOne)
app.post('/user', UserControler.create)

app.get('/books', BookControler.getAll)
app.get('/book/:id', BookControler.getOne)
app.post('/book', BookControler.create)

db.sync({ force: true}).then(() => {
    Books.create({author: "admin", name: "asdasd", year: 1233})
    app.listen(3000, () => {
        console.log("Сервер запущен")
    })
})
