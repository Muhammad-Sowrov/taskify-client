import Profile from "./Profile";
import Tasks from "./Tasks";
import ToDo from "./ToDo";

const Dashboard = () => {
 
  return (
    <div className="flex justify-center">
      <div
        className="w-3/12 bg-gray-800 min-h-screen flex-col items-center justify-center
      pt-20"
      >
        <Profile></Profile>
      </div>
      <div className="min-h-screen w-3/4 pt-20 px-3 md:px-10 overflow-y-auto">
        <Tasks></Tasks>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 mt-5">
          <div className="">
            <h2 className="text-xl font-bold text-center">To Do</h2>
            <ToDo></ToDo>
          </div>
          <div className="">
          <h2 className="text-xl font-bold text-center">Ongoing</h2>
           
          </div>
          <div className="">
          <h2 className="text-xl font-bold text-center">Complete</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
