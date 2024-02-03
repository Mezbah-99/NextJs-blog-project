import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const Body = await req.json();
  try {
    const res = await axios.post(process.env.BASE_URL + "api/CreateContact", Body);
    console.log(res);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
