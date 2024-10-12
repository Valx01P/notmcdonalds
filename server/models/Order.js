import { pool } from '../config/database.js'

const Order = {
    async find() {
        try {
            const query = 'SELECT * FROM orders'
            const { rows } = await pool.query(query)
            return rows
        } catch (error) {
            console.log(error.message)
        }
    },
    async findById(id) {
        try {
            const query = 'SELECT * FROM orders WHERE id = $1'
            const { rows } = await pool.query(query, [id])
            return rows[0]
        } catch (error) {
            console.log(error.message)
        }
    },
    async create(order) {
        try {
            const query = 'INSERT INTO orders (price, meal, side, drink, dessert) VALUES ($1, $2, $3, $4, $5) RETURNING *'
            const { rows } = await pool.query(query, [order.price, order.meal, order.side, order.drink, order.dessert])
            return rows[0]
        } catch (error) {
            console.log(error.message)
        }
    },
    async update(id, order) {
        try {
            const query = 'UPDATE orders SET price = $1, meal = $2, side = $3, drink = $4, dessert = $5 WHERE id = $6 RETURNING *'
            const { rows } = await pool.query(query, [order.price, order.meal, order.side, order.drink, order.dessert, id])
            return rows[0]
        } catch (error) {
            console.log(error.message)
        }
    },
    async delete(id) {
        try {
            const query = 'DELETE FROM orders WHERE id = $1'
            await pool.query(query, [id])
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default Order