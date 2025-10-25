import supRyu from "../src/assets/images/supRyu.png";

export default function HomeSupport() {
  return (
    <section className="bg-[#1f2022] text-white py-16 px-4 md:px-12">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 max-w-xs mx-auto">
          <img
            src={supRyu}
            alt="Support LowForward"
            className="rounded-xl shadow-lg w-full h-[300px] object-contain"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Support the Project
          </h2>
          <p className="text-slate-300">
            If LowForward has helped you grow as a player or understand fighting
            games better, consider supporting me!
          </p>
          <a
            href="https://ko-fi.com/hogdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            Support on Ko-fi
          </a>
        </div>
      </div>
    </section>
  );
}
