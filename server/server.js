import koa from "koa";
import serve from "koa-static";
import koaRouter from "koa-router";
import React from "react";
import path from "path";

import App from "../app/app";

const server = koa();

const router = koaRouter();

const data = {
	initialInput: "Server rendered input"
};

router.get( "/", function*( next ) {
	yield next;

	const markup = React.renderToString( <App { ...data }/> );

	const serializedData = JSON.stringify( data )
	.replace( /\\/g, "\\\\" ) // Escape backslashes: \ -> \\
	.replace( /\"/g, "\\\"" ); // Escape double quotes: " -> \"

	this.body = `
	<!DOCTYPE html>
	<html>
		<body>
			<button id="init-app">Initialize app</button>
			<p>App will mount over server-rendered form. Pretend you are waiting for the app to load, then initialize it ^ when you are ready</p>
			<div id="app">${ markup }</div>
		</body>
		<script>window.context = JSON.parse("${ serializedData }");</script>
		<script src="/index.min.js"></script>
	</html>
	`;
});

server.use( serve( path.join( __dirname, "../dist" )));
server.use( router.routes() );

export default server;
