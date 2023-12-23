import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useTask from "../../hooks/useTask";

const Tasks = () => {
  const { user } = useContext(AuthContext);
  const [,refetch] = useTask()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const tasks = {
      tasksName: data.taskName,
      priority: data.priority,
      email: user.email,
      status: "toDo",
    };
    console.log(tasks);
    axios.post("https://taskify-server-two.vercel.app/tasks", tasks).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        refetch()
      }
    });
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-full lg:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">
              Task Name
            </label>
            <input
              {...register("taskName", { required: true })}
              type="text"
              name="taskName"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Task Name"
            />
            {errors.taskName && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">
              Priority
            </label>
            <select
              {...register("priority", { required: true })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            >
              <option disabled value="">
                Choose an option
              </option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
            {errors.priority && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-ghost outline w-full text-black hover:bg-green-300"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
