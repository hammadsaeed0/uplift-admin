import { Link } from "react-router-dom";
import {BiCoinStack} from 'react-icons/bi'
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen  bg-primary z-10 transition-all`}
    >

       
      <i
        className="bi bi-x-lg absolute text-white top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <div className=" p-5">
       <h1 className=" text-white text-4xl font-medium">
        <img  src={require('../../assets/image/logo.png')} alt="" />
       </h1>
      </div>
      <hr/>
      <ul className="mt-4">
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-[#A47ABF]">
       
          <i class="bi bi-grid-fill  mr-2 inline-block text-lg"></i>
          <Link to="/dashboard" className="text-base capitalize">
            Dashboard
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-[#A47ABF]">
          <i className="bi bi-people mr-2 inline-block text-lg"></i>{" "}
          <Link to="/user_management" className="text-base capitalize">
            User Management
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-[#A47ABF]">
         
        {/* <i class="bi bi-database"></i> */}
        {/* <i class="bi bi-database-fill"></i> */}
          <i class=" mr-1 inline-block text-lg">
          <BiCoinStack  size={22}  />
          </i>
         
          <Link to="/supporter_management" className="text-base capitalize">
          Supporter Management
          </Link>
        </li>
        {/* <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>{" "}
          <Link to="/banner" className="text-base capitalize">
            Banner
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>{" "}
          <Link to="/room_management" className="text-base capitalize">
            Room Management
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>{" "}
          <Link to="/people_management" className="text-base capitalize">
            People Management
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
export default Sidebar;