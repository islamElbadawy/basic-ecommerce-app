import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Slider />
							<ProductsList />
						</>
					}
				/>
				<Route
					path="/about"
					element={
						<>
							<About />
						</>
					}
				/>

				<Route
					path="/products/:productId"
					element={
						<>
							<ProductDetails />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
