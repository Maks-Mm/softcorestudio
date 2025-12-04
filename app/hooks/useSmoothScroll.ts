//app/hooks/useSmoothScroll.ts


export function useSmoothScroll() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return scrollTo;
}
