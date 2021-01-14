import React, { useState } from "react";

//create your first component
export const Home = () => {
	const [list, setList] = useState(["Clean", "Shop", "Walk the dog"]);
	const [userInput, setUserInput] = useState("");

	const deleteItem = index => {
		var updatedList = list.filter((task, taskIndex) => index != taskIndex);
		setList(updatedList);
	};

	const handleKeyUp = () => {
		if (event.keyCode == 13 && userInput != "") {
			setList(list.concat(userInput));
			setUserInput("");
		}
	};

	return (
		<div className="container">
			<div className="text-center">
				<h3>To Do List</h3>
				<div className="toDoList">
					<input
						className="todoInput"
						onChange={event => setUserInput(event.target.value)}
						value={userInput}
						onKeyUp={handleKeyUp}
					/>
					<ul className="list-group">
						{list.map((value, index) => {
							return (
								<ul>
									<li className="list-group-item" key={index}>
										<button
											type="button"
											className="btn btn-outline-primary"
											onClick={() => deleteItem(index)}>
											X
										</button>
										{value}
									</li>
								</ul>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
