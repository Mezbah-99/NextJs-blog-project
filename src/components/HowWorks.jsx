async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("WorkList Data fething failed!!");
  }
  return res.json();
}

const HowWorks = async () => {
  const data = await getData();
  return (
    <div className="text-center my-20">
      <span className="text-green-600">Lorem ipsum dolor sit amet.</span>
      <h2 className="text-5xl mt-2 font-thin">
        Build & Launch <br /> without problems
      </h2>
      <div className="how-works lg:flex mt-7 items-center w-full lg:w-5/6 m-auto space-y-5 lg:space-y-0">
        {data &&
          data.map((item) => (
            <div key={item.id} className="how-works-item">
              <div className="counter flex justify-center items-center">
                <span className="counter-line-one h-1 w-full bg-green-500"></span>{" "}
                <span className="py-4 px-5 text-2xl bg-green-500 text-white rounded-full">
                  {item.step}
                </span>{" "}
                <span className="counter-line-two h-1 w-full bg-green-500"></span>
              </div>
              <h4 className="text-2xl pr-5">
                {item.title}
              </h4>
              <p className="text-gray-500 pr-5">
                {item.des}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HowWorks;
