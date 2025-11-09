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

  // Reuse client to avoid multiple connections during dev
  if (!clientPromise) {
    client = new MongoClient(process.env.MONGODB_URL, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    clientPromise = client.connect();
  }

  const db = client.db(process.env.DB_NAME);
  return db.collection(collectionName);
}

export default dbConnect;
