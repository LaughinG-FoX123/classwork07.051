import { Books, Users } from "../models/index.js";



class BookControler {

    async getAll(req, res) {
        const books = await Books.findAll()

        res.json(books)
    }

    async getOne(req, res) {
        const book = await Books.findByPk(req.params.id)
        res.json(book)
    }

    async create(req, res) {
        try {
            const {author, name, year} = req.body
            const candidate = await Books.findOne({where: {author: author}})

            const book = await Books.create({author, name, year})

            res.status(201).json(book)
        } catch (error) {
            console.error();
            
        }
    }
}

export default new BookControler()


