import { NextResponse } from "next/server";
import { arr } from "./../route";

export async function GET(req: Request, { params }) {
  const { id } = params;

  let prod = arr.find((elem) => elem.id == id);

  if (!prod) {
    return NextResponse.json("element tapilmadi");
  }

  return NextResponse.json(prod);
}
