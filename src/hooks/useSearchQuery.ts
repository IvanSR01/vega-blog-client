import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useCallback } from "react";
import debounce from "lodash.debounce";

export const useSearchQuery = (queryParam: string, timeout: number = 250) => {
  const searchParams = useSearchParams();
  const currentPathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get(queryParam) ?? ""
  );

  const debouncedSearch = useCallback(
    debounce((queryParam: string, term: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (term) {
        params.set(queryParam, term);
      } else {
        params.delete(queryParam);
      }

      router.replace(`${currentPathname}?${params.toString()}`);
    }, timeout),
    [searchParams, currentPathname, router]
  );

  const handleChangeSearchTerm = useCallback(
    (term: string) => {
      setSearchTerm(term);
      debouncedSearch(queryParam, term);
    },
    [debouncedSearch, queryParam]
  );

  return useMemo(
    () => ({
      searchTerm,
      handleChangeSearchTerm,
    }),
    [searchTerm, handleChangeSearchTerm]
  );
};
