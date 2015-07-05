import React from "react";
import App from "./app";

console.log( "loaded, waiting to initialize" );

let initButton = document.getElementById( "init-app" )

initButton.onclick = event => {
	React.render( <App { ...window.context }/>, document.getElementById( "app" ));
	console.log( "Initialized app with", window.context );
};
