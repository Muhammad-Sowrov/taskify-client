import { FaEdit, FaTrash } from "react-icons/fa";
import useTask from "../../hooks/useTask";

const ToDo = () => {
  const [tasks] = useTask();
  return (
    <div>
      <div className="">
        {tasks.map((doList) => (
          <div key={doList._id}>
            <div className="border border-black w-full px-3 py-1 rounded-box mb-3">
              <div className="flex justify-center items-center">
                <h1 className="text-start w-2/3">{doList.tasksName}</h1>
                <button>
                  <FaEdit className="mr-2"></FaEdit>
                </button>
                <button>
                  <FaTrash></FaTrash>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
