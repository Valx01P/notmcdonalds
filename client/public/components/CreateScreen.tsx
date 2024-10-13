import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Order, mealPrices, sidePrices, drinkPrices, dessertPrices } from "../types/order"

const CreateOrder = () => {
  const [meal, setMeal] = useState<string>("")
  const [side, setSide] = useState<string>("")
  const [drink, setDrink] = useState<string>("")
  const [dessert, setDessert] = useState<string>("")
  const [price, setPrice] = useState<number>(0)

  const navigate = useNavigate()

  // Calculate total price whenever the selections change
  useEffect(() => {
    const mealPrice = meal ? mealPrices[meal] : 0
    const sidePrice = side ? sidePrices[side] : 0
    const drinkPrice = drink ? drinkPrices[drink] : 0
    const dessertPrice = dessert ? dessertPrices[dessert] : 0
    setPrice(mealPrice + sidePrice + drinkPrice + dessertPrice)
  }, [meal, side, drink, dessert])

  // Submit order to backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const order: Omit<Order, "id"> = { price, meal, side, drink, dessert }
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/orders`, order)
      navigate("/")
    } catch (error) {
      alert("Failed to create order.")
      console.error(error)
    }
  }

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-8">Create an Order</h1>
      <form onSubmit={handleSubmit} className="header p-8 shadow-lg rounded-lg space-y-6 max-w-lg mx-auto">
        
        {/* Meal Selection */}
        <div>
          <label htmlFor="meal" className="block font-semibold text-white mb-2">Meal</label>
          <select
            id="meal"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Meal</option>
            {Object.entries(mealPrices).map(([key, value]) => (
              <option key={key} value={key}>
                {key} - ${value}
              </option>
            ))}
          </select>
        </div>

        {/* Side Selection */}
        <div>
          <label htmlFor="side" className="block font-semibold text-white mb-2">Side</label>
          <select
            id="side"
            value={side}
            onChange={(e) => setSide(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Side</option>
            {Object.entries(sidePrices).map(([key, value]) => (
              <option key={key} value={key}>
                {key} - ${value}
              </option>
            ))}
          </select>
        </div>

        {/* Drink Selection */}
        <div>
          <label htmlFor="drink" className="block font-semibold text-white mb-2">Drink</label>
          <select
            id="drink"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Drink</option>
            {Object.entries(drinkPrices).map(([key, value]) => (
              <option key={key} value={key}>
                {key} - ${value}
              </option>
            ))}
          </select>
        </div>

        {/* Dessert Selection */}
        <div>
          <label htmlFor="dessert" className="block font-semibold text-white mb-2">Dessert</label>
          <select
            id="dessert"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Dessert</option>
            {Object.entries(dessertPrices).map(([key, value]) => (
              <option key={key} value={key}>
                {key} - ${value}
              </option>
            ))}
          </select>
        </div>

        {/* Total Price */}
        <div className="text-xl font-bold text-white">
          Total Price: ${price.toFixed(2)}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

export default CreateOrder
