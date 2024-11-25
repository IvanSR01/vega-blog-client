import { usePathname, useRouter } from "next/navigation";
import { useProfile } from "@/hooks/useProfile";
import { useEffect, useMemo, useState } from "react";

export default function useBanner(author: any) {
  const { profile } = useProfile();
  const pathname = usePathname();
  const { push } = useRouter();
  const [isYourProfile, setIsYourProfile] = useState(true);
  const [isAuthorPage, setIsAuthorPage] = useState(true);

  useEffect(() => {
    if (profile?.id === author?.id) {
      setIsYourProfile(true);
    }
    if (
      pathname === `/author/${author?.id}` ||
      pathname === `/profile/author`
    ) {
      setIsAuthorPage(true);
    }
    if (pathname === `/author/${author?.id}` && profile?.id === author?.id) {
      push("/profile/author");
    }
  }, [pathname, profile, author]);

  return useMemo(
    () => ({ isYourProfile, isAuthorPage }),
    [isYourProfile, isAuthorPage]
  );
}
