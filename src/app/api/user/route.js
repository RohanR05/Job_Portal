import { authOptions } from "@/app/lib/authOptions";
import { getServerSession } from "next-auth/next";
import dbConnect, { collectionNames } from "@/app/lib/dbConnect";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const users = dbConnect(collectionNames.USER);

  const user = await users.findOne(
    { email: session.user.email },
    { projection: { password: 0 } }
  );

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
