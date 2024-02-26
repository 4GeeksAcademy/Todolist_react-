import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./TodoList";
import TodoApp from "./TodoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TodoApp/>
		</div>
	);
};

export default Home;
