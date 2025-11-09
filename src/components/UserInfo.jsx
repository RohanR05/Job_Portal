import dbConnect from "@/app/lib/dbConnect";
import { getServerSession } from "next-auth";

const UserInfo = async () => {
  const session = await getServerSession();

  const datall = dbConnect("allUser"); // your collection name
  const data = await datall.find({}).toArray();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Session Info</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <h2 className="text-lg font-bold mt-4">All Users</h2>
      <ul>
        {data.map((u, i) => (
          <li key={i}>{u.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
