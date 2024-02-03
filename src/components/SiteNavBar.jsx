"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteNavBar = () => {
  const currentRoute = usePathname();
  console.log(currentRoute);
  return (
    <>
      <div className="lg:w-[80%] flex justify-between items-center logo-sign m-auto text-left my-5 overflow-hidden">
        <div className="w-full md:basis-1/6 basis-2/6">
          <Link href="/" className="btn btn-ghost text-xl">
            {/* <img className='h-12' src='atis-assets/logo/atis/atis-mono-black.svg' alt='' width='auto'/> */}
            <Image
              src={"/atis-assets/logo/atis/atis-mono-sign.svg"}
              width={40}
              height={40}
              alt="This is Logo"
            />
            Atis
          </Link>
        </div>
        <div className="w-full md:basis-1/6 basis-2/6 text-center">
          <button className="btn btn-outline btn-success py-1 px-2 md:py-3 md:px-5">Sign In</button>
        </div>
      </div>
      <div className="w-full basis-1/2 nav-bar flex justify-center items-center bg-inherit py-5 md:py-0">
        <ul className="flex px-1 space-x-3 lg:text-xl flex-wrap md:flex-nowrap">
          <li className="my-3 md:my-0">
            <Link
              className={
                currentRoute === "/"
                  ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]"
                  : "py-2 px-4 rounded-xl"
              }
              href="/"
            >
              Start
            </Link>
          </li>
          <li className="my-3 md:my-0">
            <Link
              href="/team"
              className={
                currentRoute === "/team"
                  ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]"
                  : "py-2 px-4 rounded-xl"
              }
            >
              Team
            </Link>
          </li>
          <li className="my-3 md:my-0">
            <Link
              className={
                currentRoute === "/services"
                  ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]"
                  : "py-2 px-4 rounded-xl"
              }
              href="/services"
            >
              Services
            </Link>
          </li>
          <li className="my-3 md:my-0">
            <Link
              className={
                currentRoute === "/projects"
                  ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]"
                  : "py-2 px-4 rounded-xl"
              }
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="my-3 md:my-0">
            <Link
              className={
                currentRoute === "/testimonials"
                  ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]"
                  : "py-2 px-4 rounded-xl"
              }
              href="/testimonials"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SiteNavBar;
