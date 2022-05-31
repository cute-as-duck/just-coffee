import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {listCoffee} from "../api/CoffeeAPI";

function CoffeeList() {
    const [coffeeList, setCoffeeList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        listCoffee().then(response => setCoffeeList(response));
    }, [])

    function handleOrder(coffee) {
        navigate('/coffeePage', {state: {id: coffee.id, coffee}});
    }

    const tableRows = coffeeList.map(coffee =>
        <tr key={coffee.id}>
            <td>{coffee.type}</td>
            <td>{coffee.price}</td>
            <td><Button onClick={() => handleOrder(coffee)}>Order</Button></td>
        </tr>
    );

    return (
        <div>
            <h3> Coffee Menu </h3>
            <p><em> A bad day with coffee is better than a good day without it. </em></p>
            <table>
                <thead>
                <tr>
                    <th>Coffee drink</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                   tableRows
                }
                </tbody>
            </table>
        </div>
    )
}

export default CoffeeList;