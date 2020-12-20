import React from "react";
import "../styles/index.css";

function MyApp({
	Component,
	pageProps,
}: {
	Component: new () => React.Component;
	pageProps: any;
}) {
	return <Component {...pageProps} />;
}

export default MyApp;
