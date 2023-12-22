import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-screen items-center flex justify-center pt-20">
      <section className="flex justify-center items-center gap-10 p-2 md:px-10">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">
            Organize Your Life, Boost Your Productivity!
          </h1>
          <h3 className="text-2xl mt-5">
            Stay on Top of Tasks with Our
            <br />
            Intuitive To-Do App
          </h3>
          <h3 className="mt-5 font-bold">
            Start Your Day Right —{" "}
            <Link to="dashboard">
              <button className="border border-black px-3 lg:px-5 py-1 rounded-lg hover:text-gray-600 duration-500">
                Try It Now!
              </button>
            </Link>{" "}
          </h3>
        </div>
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/7yFVkss/42.jpg"
            alt=""
            className="object-fill size-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
