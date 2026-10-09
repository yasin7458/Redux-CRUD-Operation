const initialData = {
    products: [
        {
            id: 1,
            name: "SmartPhone",
            category: "Electronics",
            price: 25000,
            brand: "Samsung"
        },
        {
            id: 2,
            name: "Laptop",
            category: "Electronics",
            price: 55000,
            brand: "Dell"
        },
        {
            id: 3,
            name: "Headphones",
            category: "Accessories",
            price: 3000,
            brand: "Boat"
        },
        {
            id: 4,
            name: "SmartWatch",
            category: "Wearables",
            price: 5000,
            brand: "Noise"
        },
        {
            id: 5,
            name: "Tablet",
            category: "Electronics",
            price: 30000,
            brand: "Lenovo"
        }
    ]
};

const reducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state, products: [...state.products, action.payload]
            }

        case "EDIT_PRODUCT":
            return {
                ...state,
                products: state.products.map((element) =>
                    element.id == action.payload.id ? action.payload : element
                )
            }

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (element) => element.id != action.payload
                )
            }

        default:
            return { ...state };
    }

}

export default reducer;