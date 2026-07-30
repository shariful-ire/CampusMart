import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-center">
  <span className="block text-7xl md:text-rose-700l uppercase tracking-[0.5em] text-gray-500">
    Welcome To
  </span>

  <span className="block mt-2 text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-sky-400 via-blue-500 to-violet-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.45)]">
    CampusMart
  </span>
</h1>
    </div>
  );
}
