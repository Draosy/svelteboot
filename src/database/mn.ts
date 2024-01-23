import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let ur: string
if (process.env['MONGO_URL'])
{
    ur = process.env['MONGO_URL'];
}
else
{
    throw new Error('Please add your Mongo URI to .env.local')
}
const client = new MongoClient(ur)
export function start_mongo() : Promise<MongoClient> {
    console.log('Starting mongo...');
    return client.connect();
}

export default client.db()