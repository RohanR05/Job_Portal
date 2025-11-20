import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames = {
  USER: "allUser",
};

let client;
let clientPromise;

function dbConnect(collectionName) {
  if (!process.env.MONGODB_URL) {
    throw new Error("Missing MONGODB_URL in environment variables");
  }

  if (!clientPromise) {
    client = new MongoClient(process.env.MONGODB_URL, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },

      // IMPORTANT FIX FOR NEXT.JS:
      autoEncryption: undefined,
      monitorCommands: false,
    });

    clientPromise = client.connect();
  }

  const db = client.db(process.env.DB_NAME);
  return db.collection(collectionName);
}

export default dbConnect;
