const express = require( "express" );
const app = express();
const port = process.env.PORT || 5000;
const cors = require( "cors" );
require( "dotenv" ).config();

app.use( express.json() );
app.use( cors() );

// connecting with mongodb
const { MongoClient, ServerApiVersion } = require( 'mongodb' );
const uri = `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASS }@cluster0.lbqhd62.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 } );

const pdf = require( "./assets/pdf/1.pdf" )


async function run () {
	const pdfCollection = client.db( "pdf-annotation" ).collection( "pdf" )

}

run().catch( error => console.log( error ) )

app.get( "/", ( req, res ) => {
	res.send( "PDF documents annotation server is running" )
} )

app.listen( port, () => {
	console.log( "PDF documents annotation server is running at ", port )
} )