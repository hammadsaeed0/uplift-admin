import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import Button from "../../components/Button";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import Swal from "sweetalert2";
import EditUsers from "./EditUsers";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const UpdateModal = () => {
    setIsUpdateOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateOpen(false);
  };

  console.log(isUpdateOpen);

  const [deleteUser, setDeleteUser] = useState({});

  console.log(deleteUser, "deleteUser");

  useEffect(() => {
    axios
      .get(`${Base_url}/getAllUsers`)
      .then((res) => {
        console.log(res);

        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(users);

  const removeFunction = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A47ABF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${Base_url}/DeleteUser/${id}`)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              axios
                .get(`${Base_url}/getAllUsers`)
                .then((res) => {
                  console.log(res.data);

                  setUsers(res.data.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <Wrapper>
      <div className=" flex   justify-between items-center">
        <div>
          <h2 className="main_title">User Management</h2>
          {/* <p className="param">Showing 8 to 20</p> */}
        </div>
      </div>

      <EditUsers
        singleUser={singleUser}
        isModalOpen={isUpdateOpen}
        setIsModalOpen={setIsUpdateOpen}
        setUsers={setUsers}
      />

      <section className="mb-20 mt-7 text-gray-800">
        <div className="block rounded-lg shadow-lg bg-[#A47ABF] p-6">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full mb-0">
                    <thead className=" bg-[#2A0955]">
                      <tr className=" rounded-lg whitespace-nowrap ">
                        <th
                          scope="col"
                          className=" text-sm text-white  font-bold px-6 py-4"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className=" text-sm text-white  font-bold px-6 py-4"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-white   font-bold px-6 py-4"
                        >
                          Profile Pic
                        </th>
                        <th
                          scope="col"
                          className="text-sm  text-white   font-bold px-6 py-4"
                        >
                          Phone Name
                        </th>

                        <th
                          scope="col"
                          className="text-sm  text-white   font-bold px-6 py-4"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {users?.map((item, index) => {
                        if (item?.usertype === "user") {
                          return (
                            <>
                              <tr className="bg-[#724D97] border-t   rounded-md ">
                                <th
                                  scope="row"
                                  className="text-sm font-normal px-6 py-4   whitespace-nowrap "
                                >
                                   <p className="mb-0.5 font-medium text-white">
                                      #1
                                    </p>
                                </th>
                                <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap  text-center">
                                  <span className=" text-base text-white  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline   bg-green-200  rounded-full">
                                    {item?.name}
                                  </span>
                                </td>
                                <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap">
                                  <img
                                    className="rounded-full mx-auto w-12"
                                    src={item?.profileImage?.url}
                                    alt="Avatar"
                                  />
                                </td>
                                <td className="align-middle text-center text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  <span className=" text-base text-white  py-1 px-2.5 leading-none  whitespace-nowrap    bg-green-200  rounded-full">
                                    {item?.phoneNumber}
                                  </span>
                                </td>

                                <td className="align-middle  text-sm font-normal px-6 py-4 whitespace-nowrap">
                                  <div className=" flex justify-center gap-2">
                                    {/* <Button
                                      onClick={() => {
                                        setSingleUser(item);
                                        UpdateModal();
                                      }}
                                      label={`Edit User`}
                                      className={`   bg-secondary py-1`}
                                    /> */}
                                    <Button
                                      onClick={() => {
                                        removeFunction(item._id);
                                      }}
                                      label={`Delete`}
                                      className={` bg-red`}
                                    />
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default UserManagement;
