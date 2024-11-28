import { usePathname, useRouter } from "next/navigation";
import { useProfile } from "@/hooks/useProfile";
import { useEffect, useMemo, useState } from "react";
import { User } from "@/shared/interfaces/user.interface";

export default function useBanner(author: User) {
  const { profile } = useProfile();
  const pathname = usePathname();
  const { push } = useRouter();
  const [isYourProfile, setIsYourProfile] = useState(false);
  const [isAuthorPage, setIsAuthorPage] = useState(false);

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
