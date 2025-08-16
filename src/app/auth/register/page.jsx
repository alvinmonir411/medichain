"use client";
import React, { useState } from "react";
import "../../globals.css";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "@/lib/Feture/user/userSlice";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const imageFile = data.Profile_img[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axios.post("/api/imageUpload", formData);
      const uploadedImageUrl = res.data.data.url;

      const userInfo = {
        roll: "user",
        name: data.name,
        email: data.email,
        password: data.password,
        image: uploadedImageUrl,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}users/user`,
        userInfo
      );

      dispatch(login(userInfo));

      setLoading(false);
      router.push("/");
      toast.success("You Have succesfully Registred");
    } catch (err) {
      console.error("Upload failed:", err);
      toast.error("not Login ");
      setLoading(false);
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
            {/* Name */}
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your Name"
                className="border_light px-2 py-2 focus:outline-fuchsia-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </fieldset>

            {/* Email */}
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your Email"
                className="border_light px-2 py-2 focus:outline-fuchsia-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </fieldset>

            {/* Password */}
            <fieldset className="flex flex-col gap-2 py-1 px-5">
              <label className="font-semibold text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Enter your Password"
                className="border_light px-2 py-2 focus:outline-fuchsia-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </fieldset>

            {/* Profile Picture */}
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
                    {...register("Profile_img", {
                      required: "Profile image is required",
                    })}
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              {errors.Profile_img && (
                <p className="text-red-500 text-sm">
                  {errors.Profile_img.message}
                </p>
              )}
            </fieldset>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={loading}
                className="btn_primary px-10 flex items-center justify-center"
              >
                {loading ? (
                  <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-5 h-5 mr-2"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
