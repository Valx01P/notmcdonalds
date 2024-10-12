import express from 'express'
import orderController from '../controllers/orderController.js'
const router = express.Router()

router.route('/')
    .get(orderController.getOrders)
    .post(orderController.addOrder)

router.route('/:id')
    .get(orderController.getOrder)
    .patch(orderController.updateOrder)
    .delete(orderController.deleteOrder)

export default router