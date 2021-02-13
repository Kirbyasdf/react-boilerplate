import { Route, Switch } from "react-router-dom";

const { REACT_APP_BASE_URL } = process.env;

export const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route render={() => <h1 className="tc">404 not found</h1>} />
		</Switch>
	);
};

const HomePage = () => {
	return (
		<div className="bg-black vh-100 white pa3 tc">
			<span className="f1 ">Welcome</span>
			<div className="f3 mv2">
				<span> This app has been preloaded with</span>
				<br />
				<a
					className="link hover-dark-red f2 i "
					href="https://reactrouter.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router
				</a>
				<br />
				<span>+</span> <br />
				<a
					className="link hover-dark-red f2  i "
					href="https://tachyons.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Tachyons
				</a>
				<br />
				<span>+</span>
				<br />
				<a
					className="link hover-dark-red f2  i "
					href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
					target="_blank"
					rel="noopener noreferrer"
				>
					ENV
				</a>
			</div>
			<span className="f3"> You can also come</span>
			<a
				className="link hover-dark-green ml2 gray f2"
				href="https://augustuskirby.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				home
			</a>
		</div>
	);
};
