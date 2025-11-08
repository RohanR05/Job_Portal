import Banner from "@/components/HomoUi/Banner";
import FAQ from "@/components/HomoUi/FAQ";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Banner></Banner>
      <UserInfo></UserInfo>
      <h2>Server side</h2>
      <p>{JSON.stringify(session)}</p>
      <FAQ></FAQ>
    </div>
  );
}
