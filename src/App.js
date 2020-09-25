import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Rightbar from "./Components/Rightbar/Rightbar";
import Leftbar from "./Components/Leftbar/Leftbar";
import MarketPlace from "./Components/MarketPlace/MarketPlace";
import Groups from "./Components/Groups/Groups";
import ProfilePage from "./Components/Profile/ProfilePage";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/'>
						<div className='row'>
							<Leftbar />
							<Home />
							<Rightbar />
						</div>
					</Route>
					<Route exact path='/Market'>
						<div className='row'>
							<Leftbar />
							<MarketPlace />
							<Rightbar />
						</div>
					</Route>
					<Route exact path='/Groups'>
						<div className='row'>
							<Leftbar />
							<Groups />
							<Rightbar />
						</div>
					</Route>
					<Route exact path='/Profile'>
						<div className='row'>
							<ProfilePage />
						</div>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
