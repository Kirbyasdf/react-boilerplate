import { Route, Switch } from "react-router-dom";
import gh from "./gh.png";

const { REACT_APP_BASE_URL } = process.env;

export const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route render={() => <h1 className="tc">404 not found</h1>} />
		</Switch>
	);
};

const linkClassStyle = "link hover-dark-red purple f2 i "

const HomePage = () => {
	return (
		<div className="bg-black vh-100 white pa3 tc">
			<span className="f1 ">Welcome</span>
			<div className=" f6">
				current build :{" "}
				<a
					className="link  f5"
					href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1701-october-22-2020"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="blue hover-dark-red ">17.0.1</span>
				</a>
			</div>
			<div className="mt2">
				<a
					href="https://github.com/Kirbyasdf/react-boilerplate"
					className="  link "
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={gh}
						className="br4    w2 rotate-vert-center"
						alt="resource failed to load, f in the console"
					/>
				</a>
			</div>
			<div className="f3 mv2">
				<span> This app has been preloaded with</span>
				<br />
				<a
					className={linkClassStyle}
					href="https://reactrouter.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router
				</a>
				<br />
				<span>+</span> <br />
				<a
					className={linkClassStyle}
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
					className={linkClassStyle}
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
