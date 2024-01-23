import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

let globalWithPromise = global as typeof global & {
   _mongoClientPromise: Promise<InstanceType<typeof MongoClient>>;
  };
  
const uri = process.env['MONGO_URL'];
const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}
let client
let clientPromise: Promise<InstanceType<typeof MongoClient>>;

if (!uri) {
   throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env['NODE_ENV'] === 'development') {
   if (!globalWithPromise._mongoClientPromise) {
       const client = new MongoClient(uri)
       globalWithPromise._mongoClientPromise = client.connect();
   }
   clientPromise = globalWithPromise._mongoClientPromise
} else {
   client = new MongoClient(uri)
   clientPromise = client.connect()
}

export default clientPromise