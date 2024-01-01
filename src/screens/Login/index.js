import { Link } from 'react-router-dom';

const AdminLogin = () => {
  
 
    return(
        <div className="  from-primary bg-gradient-to-br to-[#2A0955] h-screen flex justify-center items-center">
            <form className=" bg-[#2A0955] p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 rounded" >
           <div className=" text-center">
            <img  src={require('../../assets/image/logo.png')} className=' mx-auto' alt="" />
           <h3 className="mb-4 text-white capitalize font-semibold text-lg">dashboard login</h3>
           </div>
           
             <div className="mb-4 mt-4">
             <label className=' text-white font-normal py-3'>Username</label>
                 <input type="email" name="email" className="w-full  bg-primary mt-2 p-4 rounded outline-none text-black"  placeholder="Enter email..." />
             </div>
             <div className="mb-4">
                <label className=' text-white font-normal py-3'>Password</label>
                 <input type="password" name="password" className="w-full mt-2  bg-primary p-4 rounded outline-none text-white"  placeholder="Enter password..." />
             </div>
             <div className="mb-4">
                 <Link to={'/dashboard'} type="submit" value={'sign in'} className=" bg-[#C0A7D8]   text-center w-full p-4 rounded text-white uppercase font-semibold cursor-pointer" >sign up</Link>
             </div>
            </form>
        </div>
    )
}
export default AdminLogin;