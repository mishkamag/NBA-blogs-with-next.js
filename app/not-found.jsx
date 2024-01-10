import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center  h-screen text-center">
      <div className="mb-8">
        <img
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
          alt="Page Not Found"
          className="w-64 md:w-96"
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Oops! Something went wrong.
      </h2>
      <p className="text-gray-600 mb-4">
        We couldn't find the page you're looking for.
      </p>
      <p className="text-gray-600 mb-8">
        Let's get you back to the <Link href="/">Dashboard</Link>.
      </p>
    </main>
  );
};

export default NotFound;
