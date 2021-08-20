import stacksense from "@/public/images/stacksense.png";
import covid from "@/public/images/covid.png";
import spark from "@/public/images/spark.png";
import calculator from "@/public/images/calculator.png";
import rhymojs from "@/public/images/rhymojs.png";
import frontendro from "@/public/images/frontendro.png";

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

export const projects = [
  {
    id: "project1",
    src: stacksense,
    alt: "stacksense project thumbnail",
    github: "https://github.com/swarup4741/stacksense",
    web: "https://stacksense.vercel.app",
    projectType: "Personal"
  },
  {
    id: "project2",
    src: covid,
    alt: "covid19 project thumbnail",
    github: "https://github.com/swarup4741/Covid19HelpIndia-react",
    web: "https://covid19indiahelp.netlify.app/",
    projectType: "Personal"
  },
  {
    id: "project3",
    src: spark,
    alt: "spark project thumbanil",
    github: "https://github.com/swarup4741/spark",
    web: "https://npmjs.com/package/spark-v",
    projectType: "Personal"
  },
  {
    id: "project4",
    src: calculator,
    alt: "calculator project thumbnail",
    github: "https://github.com/swarup4741/calculator",
    web: "https://calculatorvanilla.vercel.app",
    projectType: "Personal"
  },
  {
    id: "project5",
    src: rhymojs,
    alt: "rhymojs project thumbnail",
    github: "https://github.com/rhymojs/rhymojs",
    web: "https://www.npmjs.com/package/@rhymo/core",
    projectType: "Open Source"
  },
  {
    id: "project6",
    src: frontendro,
    alt: "frontend.ro project thumbail",
    github: "https://github.com/FrontEnd-ro/frontend.ro",
    web: "https://frontend.ro",
    projectType: "Open Source"
  }
];
