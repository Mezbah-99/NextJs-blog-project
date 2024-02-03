"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contacts = () => {
  const [FormValue, setFormValue] = useState({
    fname: "",
    lname: "",
    email: "",
    msg: "",
  });
  const inputOnChange = (e) => {
    setFormValue({
      ...FormValue,
      [e.target.name]: e.target.value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (FormValue.fname.length === 0) {
      toast.error("First Name Required");
    } else if (FormValue.lname.length === 0) {
      toast.error("Last Name Required");
    } else if (FormValue.email.length === 0) {
      toast.error("Email is Required");
    } else if (FormValue.msg.length === 0) {
      toast.error("Message is Required");
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormValue),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          if(data.status === "success"){
            toast.success("Your Message send succesessfully !!!");
            setFormValue({
              fname: "",
              lname: "",
              email: "",
              msg: "",
            })
          }
        })
        .catch((error) => {
          // Handle errors
          toast.error("SomeThing is wrong, Please try again, , ");
        });
    }
  };
  return (
    <form onSubmit={formSubmit} className="">
      <Toaster />
      <div className="flex justify-center items-center max-w-screen bg-white overflow-hidden text-center">
        {/* COMPONENT CODE */}

        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-green-700">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                name="fname"
                onChange={(e) => inputOnChange(e)}
                value={FormValue.fname}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                name="lname"
                onChange={(e) => inputOnChange(e)}
                value={FormValue.lname}
              />
            </div>
            <div className="my-4">
              <input
                className="w-full bg-gray-100 text-gray-900 my-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                onChange={(e) => inputOnChange(e)}
                value={FormValue.email}
              />
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                // defaultValue={FormValue.msg}
                name="msg"
                onChange={(e) => inputOnChange(e)}
                value={FormValue.msg}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-green-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-green-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                So much more than a business analytics tool
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">{"I'm from comilla"}</h2>
                    <p className="text-gray-400">asharkota, nangolkot</p>
                  </div>
                </i>
              </div>
              <div className="flex justify-center items-center w-full gap-3 text-4xl">
                <Link href="#">
                  <FaLinkedin />
                </Link>

                <Link href="https://www.youtube.com/@CoderValueCity">
                  <FaYoutube />
                </Link>

                <Link href="https://www.facebook.com/mezbah.uddin.99/">
                  <CiFacebook />
                </Link>

                <Link href="https://github.com/developer-mezbah">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contacts;
