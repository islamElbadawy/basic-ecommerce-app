import Image1 from "../assets/carrent.png";
import Image2 from "../assets/herobg.png";
import Image3 from "../assets/tripguide.png";

import "./Slider.css";

function Slider() {
	return (
		<>
			<div
				id="carouselExample"
				className="carousel slide "
			>
				<div className="carousel-inner ">
					<div className="carousel-item active ">
						<img
							src={Image1}
							className="d-block w-100"
							alt="Image1"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={Image2}
							className="d-block w-100"
							alt="Image2"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={Image3}
							className="d-block w-100"
							alt="Image3"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
				</button>
			</div>
		</>
	);
}

export default Slider;
