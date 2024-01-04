import { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";
import Filters from "./Filters";

function ProductsList() {
	const products_url =
		"https://fakestoreapi.com/products";
	const categories_url =
		"https://fakestoreapi.com/products/categories";
	const in_category_url =
		"https://fakestoreapi.com/products/category";
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState(
		[]
	);

	const getProducts = () => {
		fetch(products_url)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	};
	const getCategories = () => {
		fetch(categories_url)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	};
	const getCategoryProducts = (cat) => {
		const url = in_category_url + "/" + cat;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	};

	const handleFilters = (cat) => {
		!cat
			? getProducts()
			: getCategoryProducts(cat);
	};

	useEffect(() => {
		getProducts();
		getCategories();
	}, []);

	return (
		<>
			<h2 className="text-center pt-3">
				Our Products
			</h2>

			<div className="container">
				<div className="row">
					<Filters
						categories={categories}
						getCatProducts={handleFilters}
					/>
				</div>
				<div className="row ">
					{products.map((p) => {
						return (
							<div
								className="col-4 mb-4"
								key={p.id}
							>
								<Product
									product={p}
									showBtn={true}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default ProductsList;
