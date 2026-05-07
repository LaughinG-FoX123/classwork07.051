import { Users } from "../models/index.js";



class UserControler {

    async getAll(req, res) {
        const users = Users.findAll()

        res.json(users)
    }

    async getOne(req, res) {
        const user = await Users.findByPk(req.params.id)
        res.json(user)
    }

    async create(req, res) {
        try {
            const {login, password, first_name, surname} = req.body
            const candidate = await Users.findOne({where: {login: login}})

            if(candidate) res.status(400).json({message: "Пользователь с таким логином уже зарегистрирован"})


            const user = await Users.create({login, password, first_name, surname})

            res.status(201).json(user)
        } catch (error) {
            console.error();
            
        }
    }
}

export default new UserControler()