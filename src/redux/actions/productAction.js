import axiosClient from "../../axios-client";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART';
export const GET_PRODUCT_IN_CART = 'GET_PRODUCT_IN_CART';
export const DELETE_PRODUCT_IN_CART = 'DELETE_PRODUCT_IN_CART';
export const UPDATE_PRODUCT_IN_CART = 'UPDATE_PRODUCT_IN_CART';

export async function getProducts(dispatch, params) {
    axiosClient.get('/products', {
        params: {
            ...params
        }
    })
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: {
                    data: res.data.data,
                    pagination: res.data.pagination,
                }
            })
        })
        .catch(err => {
            console.log(err.message)
        })
}

export async function getProduct(dispatch, id) {
    axiosClient.get(`/products/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data,
            })
        })
        .catch(err => {
            console.error(err.message)
        })
}

export async function addDataProductToCart(dispatch, data) {
    axiosClient.post('/addProductToCart', {data})
        .then(res => {
            dispatch({
                type: ADD_PRODUCT_IN_CART,
                payload: res.data,
            })
        })
        .catch(err => console.error(err.message))
}

export function getProductsToCart(dispatch, userId) {
    axiosClient.get(`/getProductsToCart/${userId}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_IN_CART,
                payload: res.data.data
            })
        })
        .catch(err => console.error(err.message))
}

export function deleteProductsToCart(dispatch, id) {
    axiosClient.delete(`/deleteProductsToCart/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_PRODUCT_IN_CART,
                payload: id
            })
        })
        .catch(err => console.error(err.message))
}

export async function updateProductToCart(dispatch, data) {
    axiosClient.put('/updateProductToCart', data)
        .then(res => {
            dispatch({
                type: UPDATE_PRODUCT_IN_CART,
                payload: res.data
            })
        })
        .catch(err => console.error(err.message))
}
