/**
 * Smoothly scrolls to a section by its DOM ID without changing the browser URL hash.
 * Keeps the page single-page running cleanly with no '#section' in the address bar.
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -70; // offset for sticky navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
