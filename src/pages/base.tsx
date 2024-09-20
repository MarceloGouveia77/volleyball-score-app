import { Outlet } from "react-router-dom";
import VolleyballIcon from "../components/icons/volleyball";

export default function Base() {
  return (
    <main className="w-full min-h-screen bg-black">
      <nav className="flex h-[64px] !bg-purple-800 text-white justify-center items-center">
        <p className="flex gap-2 items-center">
          <VolleyballIcon /> Vôlei 2K24
        </p>
      </nav>
      <section className="max-w-lg min-h-[calc(100vh-64px)] p-4 text-white flex items-center justify-center content-center">
        <Outlet />
      </section>
    </main>
  );
}
