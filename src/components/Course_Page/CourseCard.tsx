export default function CourseCard() {
  return (
    <div className="relative flex flex-col mt-4 text-gray-700 bg-white shadow-lg shadow-slate-500 bg-clip-border rounded-xl w-[320px] h-[530px]">
      <div className="relative h-50 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img src="../../../course_cover_2.jpg" width={300} alt="card-image" />
      </div>

      {/**Inner Text Description */}
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Hands-on Python Basics & Data Science for Beginners
        </h5>
        <p className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit">
          Unlock the world of programming with our hands-on Python Basics & Data
          Science course, designed for beginners to embark on a journey of
          coding, data analysis, and practical problem-solving.
        </p>
        <div className="mt-2">
          <p className="text-[13px]"></p>
          <p className="text-[13px]"></p>
          <div className="mt-2 flex flex-col justify-center flex-1">
            <div className="relative w-[120px] grid select-none text-center items-center whitespace-nowrap rounded-md bg-sky-600 py-2 px-3 font-sans text-[10px] font-bold text-white">
              <span>
                Last Update: <b>01/24</b>
              </span>
            </div>
            <div className="mt-2 relative w-[120px] grid select-none text-center items-center whitespace-nowrap rounded-md bg-sky-600 py-2 px-3 font-sans text-[10px] font-bold text-white">
              <span>
                Medium: <b>Bengali</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0 flex flex-row justify-around">
        <a href="http://wa.me/+8801766610087">
          <button
            className=" w-[140px] flex flex-row justify-center items-center align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white-500 text-green-500 border-green-500 border-2 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <img src="../../../whatsapp_icon.png" width={20} />{" "}
            <span>WhatsApp</span>
          </button>
        </a>

        <a href="mailto:ahmedfahad3596@gmail.com">
          <button
            className=" w-[140px] flex flex-row justify-center items-center align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white-500 text-red-500 border-red-500 border-2 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <img src="../../../gmail_icon.png" width={20} />{" "}
            <span className="ml-1">Email</span>
          </button>
        </a>
      </div>
    </div>
  );
}
