import { NextSeo } from "next-seo";
import { useState } from "react";
import TechCard from "./../components/TechCard";
import { Container, Row } from "react-bootstrap";

import { PrismaClient, Tech, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const teches: Tech[] = await prisma.tech.findMany({
    include: {
      Category: true,
    },
  });
  return {
    props: {
      initialTeches: teches,
    },
  };
}

export const Home = ({ initialTeches }: { initialTeches: any }) => {
  const [teches, setTeches] = useState<Tech[]>(initialTeches);
  console.log("teches", teches);
  return (
    <>
      <NextSeo
        title="Резюме Попова Дмитрия"
        description="Резюме Попова Дмитрия: junior developer"
      />

      <Container>
        {teches.map((t, i: number) => (
          <Row key={i} className="border-start border-info mt-3 p-2 shadow">
            <TechCard tech={t} />
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Home;
