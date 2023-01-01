const express = require( "express" );
const app = express();
const port = process.env.PORT || 5000;

app.get( "/", ( req, res ) => {
	res.send( "PDF documents annotation server is running" )
} )

app.listen( port, () => {
	console.log( "PDF documents annotation server is running at ", port )
} )