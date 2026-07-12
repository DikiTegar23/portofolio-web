"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-8 items-center">
        <Image
          src="/images/logos/nodejs.svg"
          width={60}
          height={60}
          alt="nodejs logo"
        />
        <Image
          src="/images/logos/express.svg"
          width={60}
          height={60}
          alt="express logo"
        />
        <Image
          src="/images/logos/javascript.svg"
          width={60}
          height={60}
          alt="javascript logo"
        />
        <Image
          src="/images/logos/react.svg"
          width={60}
          height={60}
          alt="react logo"
        />
        <Image
          src="/images/logos/next.svg"
          width={60}
          height={60}
          alt="Nextjs logo"
        />
        <Image
          src="/images/logos/mongoDB.svg"
          width={60}
          height={60}
          alt="mongoDB logo"
        />
        <Image
          src="/images/logos/Figma.svg"
          width={60}
          height={60}
          alt="Figma logo"
        />
        <Image
          src="/images/logos/git.svg"
          width={60}
          height={60}
          alt="git logo"
        />
        <Image
          src="/images/logos/docker.svg"
          width={60}
          height={60}
          alt="docker logo"
        />
        <Image
          src="/images/logos/tailwind.svg"
          width={60}
          height={60}
          alt="tailwind logo"
        />
        <Image
          src="/images/logos/mysql.svg"
          width={60}
          height={60}
          alt="mysql logo"
        />
        <Image
          src="/images/logos/flutter.svg"
          width={60}
          height={60}
          alt="flutter logo"
        />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Software Engineering</li>
        <li>Garut University, West Java, Indonesia</li>
      </ul>
    ),
  },
  {
    title: "Certificattion",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>kelas Fullstack Codepolitan</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image
          src="/images/about-image1.png"
          alt="About Image"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            i am a full stack web development with passion for creatting
            interactive and responsive web application. i have experience
            working with Javasript, react, Node.js, Express, HTML, CSS, and Git.
            I am quick learner and I am always looking to expand my knowledge
            and skiill set. I am team player and excited to work with others.
          </p>
        </div>
        <div className="flex flex-row justify-start mt-8 ">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certification")}
            active={tab === "certification"}
          >
            {" "}
            Certification{" "}
          </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};

export default AboutSection;
