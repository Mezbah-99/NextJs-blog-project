import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("AllService Data fething failed!!");
  }
  return res.json();
}
const Services = async () => {
  const data = await getData();
  return (
    <div className="w-5/6 m-auto md:my-20 my-10">
      {/* Services Items  */}
      {data &&
        data.map((item) => (
          <div key={item.id} className="lg:flex justify-center items-center my-5 py-5">
            <div className="">
              <div className="w-full space-y-6">
                <span className="text-green-500 text-bold">
                  Lorem ipsum dolor sit amet.
                </span>
                <h1 className="text-5xl">
                  {
                    item.title
                  }
                </h1>
                <p>
                  {item.des}
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full mt-8 justify-center items-center">
              <div className="space-y-3">
                <div>
                  <Image
                    src={
                      item.image1
                    }
                    width={500}
                    height={500}
                    alt="Services iamges"
                    className="h-auto w-[300px] rounded-tl-lg"
                  />
                </div>
                <div>
                  <Image
                    src={
                      item.image2
                    }
                    width={500}
                    height={500}
                    alt="Services iamges"
                    className="h-auto w-[300px] rounded-bl-lg"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image
                    src={
                      item.image3
                    }
                    width={500}
                    height={500}
                    alt="Services iamges"
                    className="h-auto w-[300px] rounded-tr-lg"
                  />
                </div>
                <div>
                  <Image
                    src={
                      item.image4
                    }
                    width={500}
                    height={500}
                    alt="Services iamges"
                    className="h-auto w-[300px] rounded-br-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Services;
