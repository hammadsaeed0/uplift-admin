import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/modal";
import { MdClose } from "react-icons/md";

const AddSupporter = ({
  isModalOpen,
  setIsModalOpen,
  closeModal,
  setUsers,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(selectedImage);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const bannerSubmit = async (values) => {
    if (!selectedImage) {
      toast.error("Please choose your profile!");
    } else if (values.name.value.length === 0) {
      toast.error("Please Enter name!");
    } else if (values.phoneNumber.value.length === 0) {
      toast.error("Please Enter phone Number!");
    } else if (values.chatPrice.value.length === 0) {
      toast.error("Please Enter chat Price!");
    } else if (values.audioCallPrice.value.length === 0) {
      toast.error("Please Enter audio call price!");
    } else if (values.videoCallPrice.value.length === 0) {
      toast.error("Please Enter video call price!");
    } else {
      let profilephoto = " ";

      try {
        let param = new FormData();

        param.append("avatars", values.profileImage.files[0]);

        profilephoto = await axios.post(`${Base_url}/UploadImage`, param);

        console.log(profilephoto, "=====profile photo===");
        // console.log(profilephoto?.data?.response,'=====profile photo2===');
      } catch (error) {
        console.log(error);
      }

      const params = {
        name: values.name.value,
        usertype: "supporter",
        phoneNumber: values.phoneNumber.value,
        chatPrice: values.chatPrice.value,
        audioCallPrice: values.audioCallPrice.value,
        videoCallPrice: values.videoCallPrice.value,
        profileImage: profilephoto?.data?.data[0].url,
      };
      await axios
        .post(`${Base_url}/register`, params)
        .then((res) => {
          console.log(res);

          if (res.data.success === true) {
            toast.success("Supporter Register Successfully!");
            setIsModalOpen(false);
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
          toast.error(error);
        });
    }
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal Content */}
        <div className="">
          <div className=" p-3 flex justify-between items-center">
            <div></div>
            <h1 className="capitalize h4 font-semibold">Add Supporter</h1>
            <MdClose onClick={() => setIsModalOpen(false)} size={25} />
          </div>
          <hr />
          <div className=" p-5">
            <div className=" text-center my-2">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  className="mx-auto w-28  h-28  rounded-full"
                  alt=""
                />
              ) : (
                <>
                  <img
                    src={require("../../assets/image/profile.jpg")}
                    className="mx-auto  w-28  h-28  rounded-full"
                    alt=""
                  />
                </>
              )}

              <div className="  my-5">
                <label
                  htmlFor="fileInput"
                  className="px-12 py-2 bg-white  font-semibold text-primary border   border-gray-200 rounded-lg cursor-pointer"
                >
                  Browse File
                </label>
                <input
                  accept="image/*"
                  onChange={handleFileChange}
                  name="profileImage"
                  type="file"
                  id="fileInput"
                  className="hidden"
                />
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                bannerSubmit(e.target);
              }}
            >
              <div className=" flex gap-5 flex-wrap">
                <div className=" w-full">
                  <Input
                    label={"Username"}
                    placeholder={""}
                    name={"name"}
                    className={"border  w-full  py-3"}
                  />
                </div>

                <div className=" md:w-[60%] w-[100%]">
                  <Input
                    label={"Phone Number"}
                    placeholder={""}
                    name={"phoneNumber"}
                    className={"border  w-full  py-3"}
                  />
                </div>
                <div className=" md:w-[36%] w-[100%]">
                  <Input
                    label={"Chat price"}
                    placeholder={""}
                    name={"chatPrice"}
                    className={"border  w-full  py-3"}
                  />
                </div>
                <div className=" md:w-[60%] w-[100%]">
                  <Input
                    label={"Audio call price"}
                    name={"audioCallPrice"}
                    placeholder={""}
                    className={"border  w-full  py-3"}
                  />
                </div>
                <div className=" md:w-[36%] w-[100%]">
                  <Input
                    label={"Video call price"}
                    placeholder={""}
                    name={"videoCallPrice"}
                    className={"border  w-full  py-3"}
                  />
                </div>
              </div>

              <Button
                label={"save"}
                type={"submit"}
                className={
                  "  bg-[#A47ABF] mt-3 uppercase text-white py-2 w-full"
                }
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddSupporter;
