import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (prod) => {
    return (
        <article className="bg-white rounded-lg shadow-lg p-4 flex items-center">
            <div className="flex-none mr-4">
                <img className="w-auto h-80 object-contain" src={prod.img} alt={prod.name} />
            </div>
            <div className="flex-grow text-center">
                <header>
                    <h2 className="text-xl font-bold">{prod.name}</h2>
                </header>
                <section className="mt-4">
                    <p className="text-gray-700">Category: {prod.category}</p>
                    <p className="text-gray-700">Description: {prod.description}</p>
                    <p className="text-gray-700">Price: ${prod.price}</p>
                </section>
                <footer className="mt-4">
                    <ItemCount stock={prod.stock} initial={1} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail