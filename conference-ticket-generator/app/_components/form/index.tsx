"use client";

import Image from "next/image";
import Button from "../button";
import Input from "../input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import GeneratedTicket from "../generatedTicket";

const Form = () => {
  const [showGeneratedTicket, setShowGeneratedTicket] = useState(false);
  const [data, setData] = useState<{
    name: string;
    email: string;
    username: string;
    image: FileList | null;
  }>({ email: "", name: "", username: "", image: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    username: string;
    image: FileList;
  }>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setData({
      name: data.name,
      email: data.email,
      username: data.username,
      image: data.image,
    });
    setShowGeneratedTicket(true);
  });

  return (
    <>
      {!showGeneratedTicket && (
        <div className="lg:px-0 px-4 flex flex-col items-center justify-center py-10 relative">
          <Image
            src={"/images/logo-full.svg"}
            alt=""
            width={205}
            className="mt-[0.0625rem]"
            height={30}
          />
          <h1 className="text-neutral-0 lg:mt-[60px] mt-9 lg:leading-[66px] text-[25px] flex flex-col text-center lg:text-[58px] font-bold">
            Your Journey to Coding Conf <span>2025 Starts Here!</span>
          </h1>
          <p className="text-neutral-300 lg:text-[23px] text-lg mt-[18px] lg:text-start text-center">
            Secure your spot at next year&apos;s biggest coding conference.
          </p>

          <form onSubmit={onSubmit} className="max-w-[460px] w-full mt-[59px]">
            <fieldset className="flex flex-col items-center justify-center gap-[56px]">
              <legend className="sr-only">
                Conference Ticket Generator Form
              </legend>

              <label
                htmlFor="file"
                className="bg-[#4b486a4d] w-full py-[18px] rounded-xl border-2 border-dashed border-neutral-700 text-center cursor-pointer relative text-neutral-0 mt-[18px] flex items-center justify-center mb-[26px]"
              >
                <span className="absolute -top-10 left-0 text-[19px]">
                  Upload Avatar
                </span>
                <input
                  {...register("image", {
                    required: "Please upload an image",
                    validate: {
                      lessThan500KB: (fileList) =>
                        (fileList && fileList[0]?.size <= 500 * 1024) ||
                        "File too large. Please upload a file under 500KB",
                    },
                  })}
                  id="file"
                  type="file"
                  alt="drag and drop or click to upload"
                  accept="image/*"
                  className="w-0 h-0"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setData((prevData) => ({
                        ...prevData,
                        image: files,
                      }));
                    }
                  }}
                />
                <div className="flex items-center flex-col justify-center gap-2 p-0">
                  {data.image && data.image.length > 0 ? (
                    <div className="rounded-xl flex flex-col gap-3 items-center">
                      <Image
                        src={URL.createObjectURL(data.image[0])}
                        alt="avatar"
                        width={50}
                        className="border border-neutral-700 rounded-xl h-[50px] w-[50px]"
                        height={50}
                      />
                      <div className="bg-[#332F4F] rounded-lg py-1 px-3">
                        <span>Change image</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="border border-neutral-700 rounded-xl p-2 bg-[#332F4F]">
                        <Image
                          src="/images/icon-upload.svg"
                          alt="upload"
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="text-[18px] mt-1 text-neutral-300">
                        Drag and drop or click to upload
                      </span>
                    </>
                  )}
                </div>
                <span className="absolute text-neutral-500 -bottom-[30px] left-0 flex items-center gap-2 text-[11.7px]">
                  <Image
                    src={"/images/icon-info.svg"}
                    alt="info"
                    width={14}
                    height={14}
                  />
                  {errors.image?.message ||
                    "Upload your photo (JPG or PNG, max size: 500KB)."}
                </span>
              </label>

              <Input
                id="name"
                label="Full Name"
                error={errors.name ? true : false}
                errorMessage={errors.name?.message as string}
                {...register("name", {
                  required: "This field is required",
                })}
              />

              <Input
                id="email"
                label="Email Address"
                placeholder="example@email.com"
                error={errors.email ? true : false}
                errorMessage={errors.email?.message as string}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address.",
                  },
                })}
              />

              <Input
                id="github_username"
                label="Github Username"
                placeholder="@yourusername"
                error={errors.username ? true : false}
                errorMessage={errors.username?.message as string}
                {...register("username", {
                  required: "This field is required",
                })}
              />

              <Button
                className="relative bottom-8"
                label="Generate My Ticket"
                type="submit"
              />
            </fieldset>
          </form>
        </div>
      )}
      {showGeneratedTicket && (
        <GeneratedTicket
          email={data.email}
          name={data.name}
          username={data.username}
          image={data.image}
        />
      )}
    </>
  );
};

export default Form;
