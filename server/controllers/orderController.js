import Order from '../models/Order.js'

const orderController = {
    getOrders: async (req, res) => {
        try {
            const orders = await Order.find()
            if (!orders) {
                res.status(404).json({ message: 'No orders found' })
            }
            res.json(orders)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getOrder: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id)
            if (!order) {
                res.status(404).json({ message: 'Order not found' })
            }
            res.json(order)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    addOrder: async (req, res) => {
        try {
            const order = await Order.create(req.body)
            res.status(201).json(order)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    updateOrder: async (req, res) => {
        try {
            const order = await Order.update(req.params.id, req.body)
            res.json(order)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteOrder: async (req, res) => {
        try {
            await Order.delete(req.params.id)
            res.json({ message: 'Order deleted' })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default orderController