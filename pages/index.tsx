import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import TechCard from "./../components/TechCard";
import { Container, Row, ToggleButton, ButtonGroup } from "react-bootstrap";

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
  const [teches, setTeches] = useState<any>(initialTeches);

  const [nameCat, setNameCat] = useState("");

  return (
    <>
      <NextSeo
        title="Резюме Попова Дмитрия"
        description="Резюме Попова Дмитрия: junior developer"
      />
      <Container className="d-flex justify-content-end">
        <ButtonGroup>
          <ToggleButton
            id={`radio-1`}
            type="radio"
            variant="primary"
            name="radio"
            value={"Все категории"}
            checked={nameCat === ""}
            onChange={(e) => {
              setNameCat("");
            }}
          >
            Все категории
          </ToggleButton>
          <ToggleButton
            id={`radio-2`}
            type="radio"
            variant="primary"
            name="radio"
            value={"Frontend разработчик"}
            checked={nameCat === "Frontend разработчик"}
            onChange={(e) => {
              setNameCat("Frontend разработчик");
            }}
          >
            Frontend разработчик
          </ToggleButton>
          <ToggleButton
            id={`radio-3`}
            type="radio"
            variant="primary"
            name="radio"
            value={"Backend разработчик"}
            checked={nameCat === "Backend разработчик"}
            onChange={(e) => {
              setNameCat("Backend разработчик");
            }}
          >
            Backend разработчик
          </ToggleButton>
          <ToggleButton
            id={`radio-4`}
            type="radio"
            variant="primary"
            name="radio"
            value={"Вебмастер"}
            checked={nameCat === "Вебмастер"}
            onChange={(e) => {
              setNameCat("Вебмастер");
            }}
          >
            Вебмастер
          </ToggleButton>
          <ToggleButton
            id={`radio-5`}
            type="radio"
            variant="primary"
            name="radio"
            value={"Разное"}
            checked={nameCat === "Разное"}
            onChange={(e) => {
              setNameCat("Разное");
            }}
          >
            Разное
          </ToggleButton>
        </ButtonGroup>
      </Container>
      <Container>
        {teches
          .filter((t: any, i: number) => t.Category.name.includes(nameCat))
          .map((t: any, i: number) => (
            <Row key={i} className={`border-start border-info mt-3 p-2 shadow`}>
              <TechCard tech={t} />
            </Row>
          ))}
      </Container>
    </>
  );
};

export default Home;
