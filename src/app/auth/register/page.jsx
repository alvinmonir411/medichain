"use client";
import React, { useState } from "react";
import "../../globals.css";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
const page = () => {
  const [imageUrl, setImageUrl] = useState("");
  console.log(imageUrl);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.Profile_img[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const res = await axios.post("/api/imageUpload", formData);
      setImageUrl(res.data.data.url);
      console.log(res);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };
  return (
    <div className="">
      <div className="relative w-full h-screen bg-cover bg-center flex items-center pt-30">
        <div className="absolute inset-0">
          <Image
            src="/assets/registetionimage.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#3c4858] opacity-70"></div>
        </div>
      </div>
      <div className="absolute top-20 p-10 left-0 right-0 rounded bg-white/90 text-black shadow-lg hover:shadow-fuchsia-600 max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="heading_lg ">Welcome To Medichain</h1>
          <p className="subtitle ">Please Creat Your accout</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 py-10"
          >
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700 ">Name</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter your Name"
                className="border_light px-2 py-2  focus:outline-fuchsia-400   "
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700"> Email</label>
              <input
                type="Email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                className="border_light px-2 py-2 focus:outline-fuchsia-400"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700">password</label>
              <input
                type="text"
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter your Password"
                className="border_light px-2 py-2 focus:outline-fuchsia-400"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700">
                Profile Picture
              </label>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-40 
                 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer 
                 bg-blue-50 hover:bg-blue-100 transition"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ArrowUpDown size={30} className="text-blue-500" />
                    <p className="mb-2 text-sm text-gray-600">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG or GIF (max 2MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    {...register("Profile_img", { required: true })}
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </fieldset>

            <div className="flex justify-center items-center  ">
              <button type="submit" className="btn_primary  px-10 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
