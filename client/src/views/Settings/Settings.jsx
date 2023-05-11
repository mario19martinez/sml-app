import Nav from "../../components/Nav/Nav";
import Detail from "../../components/Employees_components/Detail/Detail";

export default function Settings() {
  return (
    <>
      <Nav />
      <div className="h-screen w-3/5 gap-3 flex flex-col justify-start items-center p-8">
        <button>Cambio de Colores</button>
        <div>
          <label>Languaje:</label>
          <select name="Languaje" id="Languaje">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <p>Edit my Profile</p>
        <div className="flex flex-col gap-4 w-10/12 h-full items-center">
          <input
            className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white"
            placeholder="Name"
            type="text"
            id="name"
          />
          <input
            type="text"
            id="email"
            className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white"
            placeholder="Email"
          />
          <input
            type="text"
            id="phone"
            className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white"
            placeholder="Phone"
          />
          <input
            type="text"
            id="location"
            className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white"
            placeholder="Location"
          />
          <input
            type="text"
            id="status"
            className="bg-transparent border border-white rounded-md text-center w-2/5 h-1/5 shadow-md shadow-white"
            placeholder="Status"
          />
          <button>Save Changes</button>
        </div>
      </div>
      <Detail />
    </>
  );
}
