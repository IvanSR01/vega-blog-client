// import PostById from "@/screens/post-by-id/PostById";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const PostById = dynamic(() => import("@/screens/post-by-id/PostById"));

const page: NextPage = () => {
  return <PostById />;
};
export default page;
