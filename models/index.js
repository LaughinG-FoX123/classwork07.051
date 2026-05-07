import { DataTypes, Sequelize } from "sequelize"

export const db = new Sequelize({
    dialect: "sqlite",
    storage: "./storage/db.sqlite"
})

export const Users = db.define('users', {
    login: {
        type: DataTypes.STRING('255'),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING('255'),
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING('255'),
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING('255'),
        allowNull: false,
    },
    
})

export const Books = db.define('books', {
    author: {
        type: DataTypes.STRING('255'),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING('255'),
        allowNull: false,
    },
    year: {
        type: DataTypes.NUMBER('4'),
        allowNull: false,
    }
}) 