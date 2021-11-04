import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import TechCard from "./../components/TechCard";
import {
  Container,
  Row,
  ToggleButton,
  ButtonGroup,
  Alert,
  Col,
} from "react-bootstrap";
import { PrismaClient, Tech, Prisma } from "@prisma/client";
import { info, text } from "../info";

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

      <Container>
        <Row>
          <Col xs={12} className="mt-2">
            <Alert variant="info">
              <h1>Резюме: Junior Devreloper (front, back, full-stack)</h1>
            </Alert>
          </Col>
          <Col xs={12} sm={12} md={6}>
            ФИО:
            <br />
            <strong>{info.fio}</strong>
            <hr />
            Дата рождения:
            <br />
            <strong>{info.bdate}</strong>
            <hr />
            Семейный статус:
            <br />
            <strong>{info.status}</strong>
            <hr />
            Образование:
            <br />
            <strong>{info.edu}</strong>
            <hr />
          </Col>
          <Col xs={12} sm={12} md={6}>
            {text.map((t: any, i: number) => (
              <p key={i}>{t.p}</p>
            ))}
          </Col>
        </Row>
      </Container>

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

      <Container className="d-flex justify-content-end mt-3 mb-3">
        <ButtonGroup>
          <ToggleButton
            id={`radio-12`}
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
            id={`radio-13`}
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
            id={`radio-14`}
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
            id={`radio-15`}
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
    </>
  );
};

export default Home;
