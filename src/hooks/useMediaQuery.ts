import { useEffect, useState } from "react";

const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
type BreakpointKey = keyof typeof tailwindBreakpoints;

function useMediaQuery(breakpoint: BreakpointKey): boolean {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      `(min-width: ${tailwindBreakpoints[breakpoint]}px)`
    );
    const handleChange = (e: MediaQueryListEvent) => setIsMatched(e.matches);

    query.addEventListener("change", handleChange);
    handleChange(new MediaQueryListEvent("change", { matches: query.matches }));

    return () => query.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMatched;
}

export default useMediaQuery;
