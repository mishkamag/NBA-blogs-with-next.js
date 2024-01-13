import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/blogs");
  const blogs = await res.json();
  return NextResponse.json(blogs, {
    status: 200,
  });
}

export async function POST(request) {
  const blog = await request.json();

  const response = await fetch("http://localhost:4000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });

  const newBlog = await response.json();
  return NextResponse.json(newBlog, {
    status: 201,
  });
}
