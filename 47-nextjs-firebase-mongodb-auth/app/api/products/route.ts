import { NextResponse } from "next/server";

export let arr = [
  {
    id: 1,
    name: "alma",
  },
  {
    id: 2,
    name: "armud",
  },
  {
    id: 3,
    name: "heyva",
  },
  {
    id: 4,
    name: "nar",
  },
];

export async function GET(req: Request, res: Response) {
  return NextResponse.json(arr);
}
