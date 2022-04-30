export const handleSmoothScroll = (id: string): void => {
  const section = document.getElementById(id);
  if (section) {
    const { top } = section.getBoundingClientRect();
    const x = top + window.scrollY;
    window.scroll({ top: x, behavior: "smooth" });
  }

};
