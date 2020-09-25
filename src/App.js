import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/'>
						Home
					</Route>
					<Route exact path='/Market'>
						Market Place
					</Route>
					<Route exact path='/Groups'>
						Groups Place
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
