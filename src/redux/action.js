export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

export const editProduct = () => {
    return {
        type: "EDIT_PRODUCT",
        payload: product
    }
}

export const deleteProduct = () => {
    return {
        type: "DELETE_PRODUCT",
        payload: product
    }
}