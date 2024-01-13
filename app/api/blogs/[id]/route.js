import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/blogs/${id}`);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Can't find this blog" },
      {
        status: 404,
      }
    );
  }

  const blog = await res.json();

  return NextResponse.json(blog, {
    status: 200,
  });
}
