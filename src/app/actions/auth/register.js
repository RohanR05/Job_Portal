"use server";
import dbConnect from "@/app/lib/dbConnect";

const registerUser = async (payload) => {
  try {
    const result = await dbConnect("allUsers").insertOne(payload);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default registerUser;
