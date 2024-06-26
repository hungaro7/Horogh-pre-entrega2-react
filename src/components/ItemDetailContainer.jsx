import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import data from "../data/productos.json";

const ItemDetailContainer = () => {

    let {itemId} = useParams();
    let [producto, setProducto] = useState();

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])


    return (
        <div>ItemDetailContainer</div>
    )
}

export default ItemDetailContainer