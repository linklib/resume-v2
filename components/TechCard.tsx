import { Tech } from "@prisma/client";
import Image from "next/image";
import { Col } from "react-bootstrap";

interface TechCardProps {
  tech: any;
  //tech: Tech;
}

export default function TechCard(props: TechCardProps) {
  return (
    <>
      <Col xs={12} sm={12} md={3}>
        <Image
          src={props.tech.image ? props.tech.image : "no-image.jpg"}
          alt="Logo"
          width={150}
          height={150}
        />
      </Col>
      <Col xs={12} sm={12} md={3}>
        <h3>{props.tech.name}</h3>
        <p>{props.tech.desc}</p>
      </Col>
      <Col xs={12} sm={12} md={3}>
        Уровень:
        <br />
        <strong>{props.tech.lavel}</strong>
      </Col>
      <Col xs={12} sm={12} md={3}>
        Категория:
        <br />
        <strong>{props.tech.Category.name}</strong>
      </Col>
    </>
  );
}
