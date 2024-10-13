export type Order = {
    id: number,
    price: number,
    meal: string,
    side: string,
    drink: string,
    dessert: string
}

export interface MenuItem {
    [key: string]: number
}

export const mealPrices: MenuItem = {
    "Hamburger": 5,
    "Steak": 15,
    "Chicken": 10,
    "Fish": 12,
    "Pasta": 8,
    "Pizza": 7,
    "Lasagna": 9,
    "Barbecue Ribs": 13,
    "Sandwich": 6,
    "Taco": 4
}

export const sidePrices: MenuItem = {
    "Fries": 2,
    "Salad": 3,
    "Soup": 3,
    "Chips": 1,
    "Fruit": 2,
    "Vegetables": 2,
    "Rice": 2,
    "Beans": 2,
    "Bread": 1,
    "Pasta": 2
}

export const drinkPrices: MenuItem = {
    "Water": 0,
    "Soda": 1,
    "Juice": 2,
    "Milk": 1,
    "Coffee": 1,
    "Tea": 1,
    "Beer": 3,
    "Wine": 4,
    "Cocktail": 5,
    "Liquor": 5
}

export const dessertPrices: MenuItem = {
    "Ice Cream": 3,
    "Cake": 4,
    "Pie": 4,
    "Cookies": 3,
    "Cheesecake": 5,
    "Pudding": 3,
    "Brownie": 3,
    "Muffin": 2,
    "Donut": 2,
    "Cupcake": 2
}