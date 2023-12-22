import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {signIn, signInWithGoogle} = useContext(AuthContext)
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(res=> {
        console.log(res);
        reset()
    })

  };

  const handleGoogle = () => {
    signInWithGoogle()
    .then(result=> {
      console.log(result.user);
    })
    .then(error => {
      console.log(error);
    })
  }

  //
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/i,
                      message:
                        "Password must have an uppercase, lowercase, number, and special character",
                    },
                  })}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  placeholder="Password"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-ghost outline w-full text-black hover:bg-green-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            <button 
            onClick={handleGoogle}
            className="btn btn-ghost outline w-full text-black hover:bg-green-300 mt-3">
              <FaGoogle/> Login With Google
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Do not have an account?{" "}
              <NavLink
                to="/register"
                className="text-green-500 hover:underline"
              >
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
