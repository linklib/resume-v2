import { Tech } from "@prisma/client";
import Image from "next/image";

interface TechCardProps {
  tech: Tech;
}

export default function TechCard(props: TechCardProps) {
  return (
    <div className="border rounded-lg p-4 flex">
      <div className="my-auto">
        <Image
          src={props.tech.image ? props.tech.image : "no-image.jpg"}
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.tech.name} {props.tech.desc}
        </p>
        <p className="text-gray-500">{props.tech.categoryId}</p>
      </div>
    </div>
  );
}
