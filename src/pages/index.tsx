import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PageHeader } from "../components/PageHeader";
import { Hero } from "../components/Hero";
import { ProjectList } from "../components/Projects/ProjectList";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <PageHeader title={`van der Vlugt - Technology & Consultancy`} follow />
      {/* Page items go here.. */}
      <Hero />
      <ProjectList />
      <CallToAction
        heading='Bring your product idea to life!'
        body=''
        button={{
          label: "Get in touch",
          href: "mailto:info@vandervlugt.me",
          color: "blue",
        }}
      />
      <Footer />
    </>
  );
};

export default Home;
