"use server";
import dbConnect, { collectionNames } from "@/app/lib/dbConnect";

const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionNames.USER).insertOne(payload);

    // Convert insertedId to string for client-side use
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default registerUser;
