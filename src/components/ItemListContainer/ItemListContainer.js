import { useState, useEffect } from "react";
import {getProducts, getProductsByCategory} from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const productosRef = collection(db, 'productos');
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef;

        getDocs(q).then((resp) => {
            setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, [categoryId]);

    return (
        <div className="p-4 text-center">
            <h2 className="text-black text-2xl">{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default  ItemListContainer;