import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Brandlist data fetch failed!!!");
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:px-4">
            <h1 className="text-center mb-5 md:text-4xl text-2xl text-green-500 font-bold underline">
              Trusted by <span className="text-black underline">brands </span>
              all over the <span className="text-black underline">
                {" "}
                world
              </span>{" "}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-20">
              {data &&
                data.map((item) => (
                  <Image
                    key={item.id}
                    className="h-auto max-w-full rounded-lg"
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={60}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
