import { Github, Twitter, Dribbble } from "@/components/Icons";

export const navLinks = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "About",
    url: "/about"
  },
  {
    label: "Projects",
    url: "/#projects"
  },
  {
    label: "Blog",
    url: "/blog"
  }
];

export const SocialLinks = [
  {
    label: "Github",
    component: <Github />,
    url: "https://github.com/swarup4741"
  },
  {
    label: "Dribbble",
    component: <Dribbble />,
    url: "https://dribbble.com/swarupdas"
  },
  {
    label: "Twitter",
    component: <Twitter />,
    url: "https://twitter.com/swarup4741"
  }
];
