import React, {useState} from "react";


const Home = () => {

	const [selectedColor, setSelectedColor] = useState("red")

	// let color = "blue"
	// console.log("First color: ", color)
	// const [myColor, setmyColor] = useState("red")
    // console.log("Initial myColor: ",myColor)

	// const clickHandler = () => {
	// 	color = "yellow"
	// 	console.log("Second color: ", color)
	// }
	// const clickHandlerTwo = () =>{
	// 	setmyColor("orange")
	// 	console.log("Second myColor: ",myColor)
	// }

	return (
		<div className="text-center">
			<div className="pole"></div>
			<div className="traffic-light">
				<div onClick={()=>setSelectedColor("red")} className={"light red" +(selectedColor === "red" ? " glow " : "")}></div>
				<div onClick={()=>setSelectedColor("yellow")} className={"light yellow" +(selectedColor === "yellow" ? " glow " : "")}></div>
				<div onClick={()=>setSelectedColor("green")} className={"light green" +(selectedColor === "green" ? " glow " : "")}></div>
			</div>
		</div>
	);
};






export default Home;
