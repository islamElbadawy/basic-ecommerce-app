import { Link } from "react-router-dom";

function Product(props) {
	const { product, showBtn } = props;
	return (
		<>
			<div className="card">
				<img
					src={product.image}
					className="card-img-top"
					alt={product.title}
				/>
				<div className="card-body">
					<h5 className="card-title">
						{product.title}
					</h5>
					<p className="card-text text-truncate">
						{product.description}
					</p>
					<p>Price: {product.price}$</p>
					{showBtn && (
						<>
							<Link
								to={`/products/${product.id}`}
								className="btn btn-primary"
							>
								Details
							</Link>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default Product;
