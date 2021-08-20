import errorBg from "@/public/images/errorBg.png";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function errorPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <Image
          src={errorBg}
          placeholder="blur"
          height={160}
          width={195}
          alt="error page illustration"
        />
        <h1 className="text-2xl font-bold text-red-500">404! Page not found</h1>
        <p className="text-center">
          Oops! Looks like the page you are looking for currently doesn’t exist.
        </p>
      </div>
    </Layout>
  );
}
