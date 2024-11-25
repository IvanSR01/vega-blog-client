export const navData: TypeNavData[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/single-post",
    name: "Single Post",
  },
  {
    path: "/contact/request",
    name: "Contact",
  },
];

export type TypeNavData = {
	path: string;
	name: string;
};