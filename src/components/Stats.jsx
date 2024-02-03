import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineSyncProblem } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { GiLightProjector } from "react-icons/gi";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("StatList Data fething failed!!");
  }
  return res.json();
}

const Stats = async () => {
  const data = await getData();
  return (
    <div className="mt-20 w-5/6 m-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-3 rounded bg-green-100 text-green-500 text-4xl">
              <CiShoppingCart/>
            </span>
            <h3 className="text-2xl font-bold">{data.followers}</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-3 rounded bg-green-100 text-green-500 text-4xl">
              <MdOutlineSyncProblem />
            </span>
            <h3 className="text-2xl font-bold">{data.solved}</h3>
            <p className="text-gray-500">Solved Problems</p>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-3 rounded bg-green-100 text-green-500 text-4xl">
              <CiImageOn />
            </span>
            <h3 className="text-2xl font-bold">{data.customers}</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-3 rounded bg-green-100 text-green-500 text-4xl">
              <GiLightProjector />
            </span>
            <h3 className="text-2xl font-bold">{data.projects}</h3>
            <p className="text-gray-500">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
