import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListItem from "./ListItem";
import url from "./libs/url";

type Props = {
  id: number;
  title: string;
  date: string;
  completed: boolean;
  userId?: number;
};

const FormSection = () => {
  const { handleSubmit, formState: { errors } } = useForm();
  const [tasks, setTasks] = useState<Props[] | null>(null);
  const [check, setCheck] = useState<boolean>(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${url}/tasks`,{
          headers: {
            'Authorization': 'Bearer YOUR_TOKEN_HERE'
          }
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Props[] = await res.json();
        setTasks(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    })();
  }, []);

  return (
    <div className="w-full dark:text-white bg-white dark:bg-gray-800 text-black  px-10">
      <form action="" className="space-y-3 w-full">
        <h1 className="font-bold text-xl">Your ToDo</h1>
        <label htmlFor="" className="flex gap-3">
          <input
            placeholder="Add a new todo"
            className="w-full outline-none dark:focus:border-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-4 dark:border-gray-400 h-[50px] px-3 rounded-lg"
            type="text"
          />
          <button className="px-3 py-1 text-3xl flex items-center dark:bg-slate-700 bg-black text-white rounded-lg">
          <i className="bi bi-plus-lg"></i>
          </button>
        </label>
        {!tasks? (
          <>loading...</>
        ) : (
          tasks.map((task) => (
            <ListItem
              onChange={handleCheck}
              title={task.title}
              date={task.date}
              id={task.id}
              key={task.id}
            />
          ))
        )}
      </form>
    </div>
  );
};

export default FormSection;
