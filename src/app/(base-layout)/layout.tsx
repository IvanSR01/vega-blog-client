import Layout from "@/components/layout/Layout";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
	return <Layout>{children}</Layout>
}