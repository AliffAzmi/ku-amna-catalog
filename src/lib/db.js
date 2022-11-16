import { MongoClient, ServerApiVersion } from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()
// import { MONGODB_URL } from '$env/static/private'

const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 } )

await client.connect()
// client.connect(async err => {
//     const collection = await client.db("katalog").collection("categories");
//     console.log(collection)
//     client.close();
// });
export default client.db('katalog')