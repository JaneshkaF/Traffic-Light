import React, {useState} from "react";


const Home = () => {

	 const [selectedColor, setSelectedColor] = useState("red")


	return (
		<div className="text-center">
			<div className="pole"></div>
			<div className="traffic-light">
				<div onClick={()=>setSelectedColor("red")} className={"light red" +(selectedColor === "red" ? " glowred " : "")}></div>
				<div onClick={()=>setSelectedColor("yellow")} className={"light yellow" +(selectedColor === "yellow" ? " glowyellow " : "")}></div>
				<div onClick={()=>setSelectedColor("green")} className={"light green" +(selectedColor === "green" ? " glowgreen " : "")}></div>
			</div>
		</div>
	);
}





export default Home;
