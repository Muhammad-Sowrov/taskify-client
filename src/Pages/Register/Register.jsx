import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

const {createUser} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    createUser(data.email, data.password)
    .then(res => {
        console.log(res);
    })

  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Email"
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Upload Image
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              />
              {errors.image && (
                <span className="text-red-700">Please upload an image</span>
              )}
            </div> */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/i,
                })}
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Password"
              />
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password must be at-lest 6 character
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="text-red-700">This field is required</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  Password must have a uppercase, lowercase, number and special
                  character
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-ghost outline w-full text-black hover:bg-green-300"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <NavLink to="/login" className="text-green-500 hover:underline">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
