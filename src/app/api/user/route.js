import dbConnect, { collectionNames } from "@/app/lib/dbConnect";
import { auth } from "@/auth";

export async function Get() {
  try {
    const session = await auth();
    if (!session || !session.user?.email) {
      return Response.json(
        {
          message: "Not authenticated",
        },
        {
          status: 401,
        }
      );
    }
    const userCollection = dbConnect(collectionNames.USER);

    const user = await userCollection.findOne(
      { email: session.user.email },
      { projection: { password: 0 } }
    );
    return Response.json(user);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
