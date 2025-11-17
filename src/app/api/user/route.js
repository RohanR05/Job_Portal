import { authOptions } from "@/app/lib/authOptions";
import dbConnect, { collectionNames } from "@/app/lib/dbConnect";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions)// works only in server

  if (!session?.user?.email) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const users = dbConnect(collectionNames.USER);

  const user = await users.findOne(
    { email: session.user.email },
    { projection: { password: 0 } }
  );

  return Response.json(user);
}
