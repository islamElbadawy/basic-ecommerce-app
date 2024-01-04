import { useState } from "react";

function Filters(props) {
	const categories = props.categories;
	let [activeCat, setActiveCat] = useState(null);
	return (
		<>
			<ul className="nav nav-pills nav-fill mb-4 mt-4">
				<li className="nav-item" key={0}>
					<button
						className={`nav-link ${
							!activeCat ? "active" : ""
						}`}
						aria-current="page"
						onClick={() => {
							setActiveCat(null);
							props.getCatProducts(null);
						}}
					>
						All
					</button>
				</li>
				{categories.map((c, i) => {
					return (
						<>
							<li
								className="nav-item"
								key={i + 1}
							>
								<button
									className={`nav-link ${
										activeCat === c
											? "active"
											: ""
									}`}
									aria-current="page"
									onClick={() => {
										setActiveCat(c);
										props.getCatProducts(c);
									}}
								>
									{c}
								</button>
							</li>
						</>
					);
				})}
			</ul>
		</>
	);
}

export default Filters;
