import { NextSeo } from "next-seo";
import { useState } from "react";
import TechCard from "./../components/TechCard";

import { PrismaClient, Tech, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const teches: Tech[] = await prisma.tech.findMany();
  return {
    props: {
      initialTeches: teches,
    },
  };
}

export const Home = ({ initialTeches }: { initialTeches: any }) => {
  const [teches, setTeches] = useState<Tech[]>(initialTeches);
  //console.log("teches", teches);
  return (
    <>
      <NextSeo title="Main page" description="Main page description" />

      <div>Main Page</div>

      {teches.map((t, i: number) => (
        <div className="mb-3" key={i}>
          <TechCard tech={t} />
          {/*<div>{c.name}</div>*/}
        </div>
      ))}
    </>
  );
};

export default Home;
