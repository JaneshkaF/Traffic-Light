import React, {useState} from "react";


const Home = () => {

	 const [selectedColor, setSelectedColor] = useState("red")
	 function changeColors (){
		if (selectedColor === "red") {
			setSelectedColor("green")
		} else if (selectedColor ==="green"){
			setSelectedColor("yellow")
		} else {
			setSelectedColor("red")
		}
	 }


	return (
		<div className="text-center">
			<div className="pole"></div>
			<div className="traffic-light">
				<div className={"light red" +(selectedColor === "red" ? " glowred " : "")}></div>
				<div className={"light yellow" +(selectedColor === "yellow" ? " glowyellow " : "")}></div>
				<div className={"light green" +(selectedColor === "green" ? " glowgreen " : "")}></div>
			</div>
			<br></br>
			<button class="button" onClick={()=>changeColors()}>click me
			</button>
		</div>
	);
}





export default Home;
