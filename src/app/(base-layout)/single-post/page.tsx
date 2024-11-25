// import PostById from '@/screens/post-by-id/PostById'
"use client";
import FullScreenLoader from "@/components/full-screen-loader/FullScreenLoader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const PostById = dynamic(() => import("@/screens/post-by-id/PostById"), {
  loading: () => <FullScreenLoader />,
});

const page: NextPage = () => {
  return <PostById />;
};
export default page;
