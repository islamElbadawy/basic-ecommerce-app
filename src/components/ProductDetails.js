import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
	let id = useParams().productId;
	const api_url =
		"https://fakestoreapi.com/products";
	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch(`${api_url}/${id}`)
			.then((res) => res.json())
			.then((product) => setProduct(product));
	});
	return (
		<>
			<Product
				product={product}
				showBtn={false}
			/>
		</>
	);
}

export default ProductDetails;
