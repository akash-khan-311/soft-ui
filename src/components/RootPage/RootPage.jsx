import { HeroParallax } from "../ui/hero-parallax";
export const products = [
  {
    title: "Accordion",
    link: "/components/",
    thumbnail: "https://i.postimg.cc/0Q1hKS0Y/Accordion-Anatomy-292dbb2750.png",
  },
  {
    title: "Avatar",
    link: "/components/avatar",
    thumbnail: "https://i.postimg.cc/kgZ09zVh/avatar.png",
  },
  {
    title: "Button",
    link: "/components/button",
    thumbnail: "https://i.postimg.cc/L8hcc2s1/button.jpg",
  },

  {
    title: "Card",
    link: "/components/card",
    thumbnail: "https://i.postimg.cc/ZKfksCJm/card.jpg",
  },
  {
    title: "Footer",
    link: "/components/footer",
    thumbnail: "https://i.postimg.cc/VNC3Ngns/footer.jpg",
  },
  {
    title: "Hero",
    link: "/components/hero",
    thumbnail: "https://i.postimg.cc/sXPqY2Tt/hero.jpg",
  },

  {
    title: "Navbar",
    link: "/components/nav",
    thumbnail: "https://i.postimg.cc/MphFgB4C/navbar.png",
  },
  {
    title: "Pagination",
    link: "/components/pagination",
    thumbnail: "https://i.postimg.cc/VvYTDcT5/pagination.jpg",
  },
  {
    title: "Progress Bar",
    link: "/components/progress",
    thumbnail: "https://i.postimg.cc/7hmRRW89/progress.png",
  },
  {
    title: "Skeleton",
    link: "/components/skeleton",
    thumbnail: "https://i.postimg.cc/NG4ZL59X/skeleton.png",
  },
  {
    title: "Skeleton",
    link: "/components/skeleton",
    thumbnail: "https://i.postimg.cc/MKpNBqVF/spinner.jpg",
  },

  {
    title: "Stats",
    link: "/components/stats",
    thumbnail: "https://i.postimg.cc/GmBfMKMP/state.jpg",
  },
  {
    title: "Table",
    link: "/components/table",
    thumbnail: "https://i.postimg.cc/25hKY6NV/table-components-ui.jpg",
  },
  {
    title: "Testimonials",
    link: "/components/testimonials",
    thumbnail: "https://i.postimg.cc/brNC19Dt/testimo.png",
  },
  {
    title: "Input",
    link: "/components/input",
    thumbnail: "https://i.postimg.cc/LXVQqbXS/text-input-03-85acd0e359.png",
  },
];
const RootPage = () => {
  return (
    <div className="">
      <HeroParallax products={products} />
    </div>
  );
};
export default RootPage;
