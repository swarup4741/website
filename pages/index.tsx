import Layout from "@/components/Layout";
import Project from "@/components/Project";
import SocialLink from "@/components/SocialLink";
export default function Home() {
  return (
    <Layout>
      <h1 className="font-bold md:text-5xl text-3xl">Hey, I’m Swarup Das</h1>
      <p className="my-4 text-gray-700 dark:text-gray-400 leading-relaxed tracking-wide max-w-2xl">
        I love <span className="text-blue-500 font-semibold">writing</span> and{" "}
        <span className="text-green-500 font-semibold">reading</span> code. Open
        Source enthusiast because it is one of the greatest way to learn. A
        designer not by profession but by{" "}
        <span className="text-yellow-500 font-semibold">passion</span>. An
        adventurous guy with a vision to make people’s life{" "}
        <span className="text-purple-500 font-semibold">easier</span> through
        software.
      </p>
      <h3 className="text-xl font-semibold mt-8">
        Get to know more about what I love to do, see and feel.
      </h3>
      <div className="mt-6">
        <SocialLink />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl md:text-4xl font-bold py-2">My Projects</h2>
        <Project />
      </div>
    </Layout>
  );
}
