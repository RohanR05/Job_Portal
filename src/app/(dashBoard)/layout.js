import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import { redirect } from "next/navigation";
import DashLayoutLinks from "@/components/Links/DashLayoutLinks";

export default async function DashLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return redirect("/api/auth/signin"); // server-side redirect
  }

  return (
    <div className="drawer lg:drawer-open bg-neutral">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="navbar bg-accent w-full lg:hidden">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-primary btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Dashboard Panel</div>
        </div>

        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-primary/20 md:bg-accent backdrop-blur-md min-h-full w-80 p-4 gap-3">
          <DashLayoutLinks></DashLayoutLinks>
        </ul>
      </div>
    </div>
  );
}
