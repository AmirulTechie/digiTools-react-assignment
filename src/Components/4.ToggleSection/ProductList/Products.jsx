import Card from "./Card";

const ProductCard = ({ products }) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
            {
                products.map((product, index) => 
                    <Card key={index} product = {product}></Card>
                )
            }
        </div>
    );
};

export default ProductCard;