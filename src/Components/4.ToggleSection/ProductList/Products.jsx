import Card from "./Card";

const ProductCard = ({ products, carts, setCarts }) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-10/12 mx-auto mb-28'>
            {
                products.map((product, index) => 
                    <Card key={index} product={product} carts={carts} setCarts={setCarts}></Card>
                )
            }
        </div>
    );
};

export default ProductCard;