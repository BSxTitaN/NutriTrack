"use client"

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { logout } from "@/app/(public)/auth/action";

export default function Header() {
  const router = useRouter();

  // Get the current path from the router
  const currentPath = usePathname();

  // Define a function to check if a link is active
  const isActive = (path: string) => path === currentPath;

  const handleLogout = async (e: any) => {
    try {
      e.preventDefault();
      logout().then(() => {
        router.push("/");
      });
    } catch (err: any) {
      console.error("Firebase Auth Error:", err.code, err.message);
    }
  };

  return (
    <NavBar className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-24 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense
          fallback={
            <div className="flex-1 overflow-auto justify-center items-center" />
          }
        >
          <Image
            src="/logo.png"
            width={92}
            height={92}
            alt="Login Picture"
            className="logoImg mr-2"
          />
        </React.Suspense>
      </div>

      <nav className="py-2 px-2 hidden md:flex gap-2 justify-center items-baseline font-semibold text-slate-600">
        <Link
          className={`${
            isActive("/")
              ? "text-slate-800 bg-slate-700/[8%]"
              : "hover:text-slate-800 hover:bg-slate-700/[8%]"
          } px-4 py-2 rounded-full transition-colors duration-100 ease-out`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`${
            isActive("/dashboard/search")
              ? "text-slate-800 bg-slate-700/[8%]"
              : "hover:text-slate-800 hover:bg-slate-700/[8%]"
          } px-4 py-2 rounded-full transition-colors duration-100 ease-out`}
          href="/dashboard/search"
        >
          Search
        </Link>
      </nav>

      <div className="flex items-center">
        {/* {auth.currentUser ? (
          <UserMenu user={userInfo} />
        ) : (
          
        )} */}
        <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
          <button
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </NavBar>
  );
}

const NavBar = styled.header``;
