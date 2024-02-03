import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("Team Data fething failed!!");
  }
  return res.json();
}

const Team = async () => {
  const data = await getData();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {data &&
            data.map((item) => (
              <div key={item.id} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    src={item.image}
                    alt="Bonnie Avatar"
                    width={300}
                    height={300}
                    className="rounded-tl-lg md:rounded-bl-lg m-auto rounded-lg mt-5 md:mt-0 h-[200px] object-cover lg:h-[250px]"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{item.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    CEO &amp; Web Developer
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {item.bio}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <Link
                        href={item.facebook}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={item.twitter}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={item.instagram}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
