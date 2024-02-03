import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Fetch featured project Failed!!!");
  }
  return res.json();
}

const FeturedProject = async () => {
  const data = await getData();
  return (
    <div className="w-4/6 m-auto my-20">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="subtitle text-green-500">Have a Good Day.</div>
          <div className="title md:text-5xl text-2xl">Featured Projects</div>
        </div>

        <button className="btn btn-success text-white p-1 md:p-3">See More...</button>
      </div>
      <div className="mt-10">
        <div className="w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            {data &&
              data.map((item) => (
                <div key={item.id}>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeturedProject;
