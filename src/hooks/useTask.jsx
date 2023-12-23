import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTask = () => {
  const { user } = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axios.get(`https://taskify-server-xi.vercel.app/tasks?email=${user.email}`); 
      return res.data;
    },
  });
  return [tasks, refetch]
};

export default useTask;
