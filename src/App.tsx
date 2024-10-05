import { FormEvent, useEffect, useState } from "react";
import ModalPage from "./components/ModalPage";
import FormSection from "./components/FormSection";

const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleEvent = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChange(!change);
    setTheme(change ? 'light' : 'dark');
  };

  return (
    <main className="h-screen w-full bg-gray-200 dark:bg-gray-900 p-5">
      <header className="flex justify-between">
        <h1 className="font-bold text-2xl dark:text-white">Todo App</h1>
        <div className="space-x-3">
          <button onClick={handleEvent} className="px-3  py-1 bg-gray-400 dark:bg-gray-700 dark:text-white text-black  rounded-lg">
            <i className={`bi bi-${change ? 'sun-fill' : 'moon-stars'}`}></i>
          </button>
          <button
            className="px-3 py-1 bg-gray-400 dark:text-white text-black dark:bg-gray-700 rounded-lg"
            onClick={() => setOpenModal(true)}
          >
            <i className="bi bi-box-arrow-right"></i>

          </button>
        </div>
      </header>
      <article className="mt-5 rounded-lg bg-white dark:bg-gray-800 shadow-xl py-8 w-full flex flex-1">
        <FormSection />
      </article>
      {openModal && (
        <article className="absolute h-screen w-full bg-slate-200 dark:bg-gray-900 px-10  py-5 top-0 left-0">
          <ModalPage change={change} handleEvent={handleEvent} closeModal={()=>setOpenModal(false)} />
        </article>
      )}
    </main>
  );
};

export default App;
