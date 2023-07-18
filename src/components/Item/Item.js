import { Link } from "react-router-dom";
const Item = ({id, name, price, category, img, stock, description}) => {
    return (
        <article className="bg-white rounded-lg shadow-lg p-4 m-8">
            <header>
                <h2 className="text-xl font-bold">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section className="mt-4">
                <p className="text-gray-700">Price: ${price}</p>
                <p className="text-gray-700">Stock: {stock}</p>
            </section>
            <footer className="mt-4">
                <Link to={`/item/${id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 Option">More Information</Link>
            </footer>
        </article>
    )
}

export default Item;