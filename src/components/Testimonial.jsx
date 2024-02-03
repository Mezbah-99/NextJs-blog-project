import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("TestimonialList Data fething failed!!");
  }
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {data &&
            data.map((item) => (
              <figure key={item.id} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <p className="my-4">
                    {item.msg}
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="Profile picture"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{item.name}</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {item.designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Show more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
