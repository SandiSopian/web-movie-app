import Link from "next/link";
import React from "react";

const User = () => {
  return (
    <div className="flex justify-end -mt-10">
      <div className="flex gap-2">
        <button className="text-blue-600 border rounded-md py-2 px-4">
          <Link href="/register">Register</Link>
        </button>
        <button className="text-white border bg-blue-600 rounded-md py-2 px-4">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default User;
