import { Link } from "react-router-dom";

const Article = ({ artcArry }) => {
  return artcArry.map((item) => {
    return (
      <div className="animate-rotate transition-all duration-300 w-full md:w-2/5 flex flex-col justify-between border-2 rounded-lg border-zinc-400 hover:border-zinc-600 hover:shadow-2xl cursor-pointer">
        <div className="w-full">
          <img src={item.img} alt="" className="w-full rounded-t-md" />
        </div>{" "}
        <div className="p-2 bg-gradient-to-r rounded-b-lg from-[#9a9a9a75] to-[#f1f1f1]">
          <h1 className="font-bold mt-3">{item.name}</h1>
          <p className="text-gray-600 text-[12px] mt-1">{item.title}</p>
          <div className="icons flex justify-between mt-3">
            <div className="flex gap-2">
              <Link to={item.link1}>
                {" "}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white hover:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"
                  />
                </svg>{" "}
              </Link>
              <Link to={item.github}>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white hover:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center gap-1 ">
              <a href={item.more}>more</a>
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Article;
