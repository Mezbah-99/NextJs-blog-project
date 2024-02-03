import Image from "next/image";
import HeroAnimation from "./HeroAnimation";
async function getData(){
  const res = await fetch(process.env.BASE_URL+"api/HeroList")
  if(!res.ok){
    throw new Error("Data fething failed!!")
  }
  return res.json()
}
const Hero = async () => {
  const data = await getData()
  return (
    <HeroAnimation data={data}/>
  );
};

export default Hero;
