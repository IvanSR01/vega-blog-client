import ProfileLayout from "@/components/layouts/profile-layout/ProfileLayout";
import { PropsWithChildren } from "react";


export default function Layout({ children }: PropsWithChildren) {
	return <ProfileLayout>{children}</ProfileLayout>
}