import axios from "axios";

const BASE_URL = 'http://localhost:8081';

function createOrder(username, password, customCoffeesId) {

    return axios.post(`${BASE_URL}/orders`, customCoffeesId,
        {headers: {
                'username': username,
                'password': password
            }
    })
}

function getCoffeeDrinksByOrderId(username, password, orderId) {
    return axios.get(`${BASE_URL}/orders/orderItems/${orderId}`,
        {headers: {
                username: username,
                password: password
            }});
}

export {
    createOrder, getCoffeeDrinksByOrderId
}