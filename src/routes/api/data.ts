import { MongoClient } from 'mongodb';
import db from '../../database/mn'

export async function get() {
  const collection = db.collection('Blogs');
  const data = await collection.find().toArray();

  return {
    body: {
      data,
    },
  };
}
