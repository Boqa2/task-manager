import React from "react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
type Props = {
  closeModal: () => void;
  handleEvent: (e: FormEvent<HTMLButtonElement>) => void;
  change: boolean;
};
const ModalPage = ({ closeModal, handleEvent, change }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full py-5 rounded-lg dark:text-white text-black  dark:bg-gray-800 shadow-2xl  bg-white px-10">
      <form action="" className="space-y-3 w-full">
        <div className="flex text-2xl font-bold justify-between">
          <h1>Login</h1>
          <div className="space-x-3 text-lg">
            <button
              onClick={handleEvent}
              className="px-3  py-1 bg-slate-200 dark:bg-gray-700 dark:text-white text-black  rounded-lg"
            >
              <i className={`bi bi-${change ? "sun-fill" : "moon-stars"}`}></i>
            </button>
            <button
              className="px-3 py-1 bg-slate-200 dark:text-white text-black dark:bg-gray-700 rounded-lg"
              onClick={closeModal}
            >
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </div>

        <label htmlFor="" className=" relative flex flex-col gap-3">
          <input
            placeholder="Username"
            className="w-full outline-none dark:focus:border-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-4 dark:border-gray-400 h-[50px] px-3 rounded-lg"
            type="text"
          />
          <button className="absolute right-4 top-[44%]" onClick={handleShow}>
            <i className={`bi ${show ? "bi-eye" : "bi-eye-slash"}`}></i>
          </button>
          <input
            placeholder="Password"
            className="w-full outline-none dark:focus:border-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-4 dark:border-gray-400 h-[50px] px-3 rounded-lg"
            type={show ? "text" : "password"}
          />

          <button className="py-3 w-full flex justify-center items-center bg-black dark:bg-gray-700 text-white rounded-lg">
            Login
          </button>
        </label>
      </form>
    </div>
  );
};

export default ModalPage;
