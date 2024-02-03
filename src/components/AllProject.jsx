import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("All project calling fail!!!");
  }
  return res.json();
}

const AllProject = async () => {
  const data = await getData();
  return (
    <>
      <div className="container my-15 mx-auto md:px-6 lg:my-20">
        <section className="mb-32">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Projects</h2>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-full w-[90%] m-auto">
            {/* Projects item */}
            {data &&
              data.map((item) => (
                <div
                  key={item.id}
                  className="project-item zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                  data-te-ripple-init=""
                  data-te-ripple-color="dark"
                  data-aos="zoom-in-left"
                >
                  <Image
                    src={
                      item.image
                    }
                    width={600}
                    height={500}
                    alt="City images"
                    className="project-img"
                  />
                  <Link href="#">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                      <div className="flex h-full items-end justify-start">
                        <h5 className="m-6 text-lg font-bold text-white">
                          {item.title}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                    </div>
                  </Link>
                </div>
              ))}
              
          </div>
        </section>
      </div>
    </>
  );
};

export default AllProject;
