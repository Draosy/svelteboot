import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let ur: string
let cl: string
if (process.env['MONGO_URL'])
{
    ur = process.env['MONGO_URL'];
}
else
{
    throw new Error('Please add your Mongo URI to .env.local')
}
if(process.env['COL_NAME'])
{
    cl = process.env['COL_NAME'];
}
else
{
    throw new Error('No collection name in .env.local')
}
const client = new MongoClient(ur)
export async function start_mongo() : Promise<MongoClient> {
    console.log('Starting mongo...');
    // const bablogs = client.db().collection(cl)
    // const data = await bablogs.find().toArray();
    // const parsedBlogs = data.forEach((element) => JSON.parse(element.body));
    return client.connect();
}

export default client.db()