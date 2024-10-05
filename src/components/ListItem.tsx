import 'bootstrap-icons/font/bootstrap-icons.css';

type Proops = {
    id?: number,
    title: string,
    date: string,
    completed?:boolean,
    userId?: number,
    onChange?: ()=>void
}

const ListItem = ({title, date, onChange}:Proops) => {
  return (
    <li  className="bg-white shadow-lg border-2 border-gray-600">
        <input onChange={onChange} type="checkbox" />
      {title}
      {date}
      <button><i className="bi bi-pencil"></i></button>
      <button><i className="bi bi-trash3"></i></button>
    </li>
  )
}

export default ListItem
