import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);

    
    getDoc(docRef).then((resp) => {
      setProduct({ id: resp.id, ...resp.data() });
    });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
