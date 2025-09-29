"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiCalendar, FiMapPin, FiWifi, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { experienceV2 } from "@/data";

const Chip = ({ children, purple = false }: { children: React.ReactNode; purple?: boolean }) => (
  <span
    className={
      purple
        ? "px-2.5 py-1 text-xs rounded-full bg-purple/90 text-black"
        : "px-2.5 py-1 text-xs rounded-full bg-black-200 border border-black-300 text-white-100"
    }
  >
    {children}
  </span>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-black-200 border border-black-300 text-white-100">
    {children}
  </span>
);

const ExperienceV2 = () => {
  return (
    <section className="py-20" id="workExperience">
      <h1 className="heading">
        My <span className="text-purple"> Work Experience</span>
      </h1>

      <div className="mt-12 space-y-6">
        {experienceV2.map((exp) => (
          <Card key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

function Card({ exp }: { exp: (typeof experienceV2)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-black-300 bg-black-100/70 backdrop-blur-lg p-5 md:p-7 lg:p-8">
      {/* header */}
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-black-200 border border-black-300 flex items-center justify-center">
            <Image src={exp.logo} alt={`${exp.company} logo`} width={72} height={72} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
            {exp.role}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {exp.companyUrl ? (
              <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="text-purple hover:underline inline-flex items-center gap-1">
                {exp.company} <FiExternalLink />
              </a>
            ) : (
              <span className="text-purple">{exp.company}</span>
            )}
          </div>

          {/* meta chips */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Chip><span className="inline-flex items-center gap-1"><FiCalendar /> {exp.start} — {exp.end}</span></Chip>
            <Chip><span className="inline-flex items-center gap-1"><FiMapPin /> {exp.location}</span></Chip>
            {exp.remote && <Chip><span className="inline-flex items-center gap-1"><FiWifi /> Remote</span></Chip>}
            <Chip purple>{exp.employmentType}</Chip>
          </div>
        </div>
      </div>

      {/* summary */}
      <p className="mt-5 text-white-100">{exp.summary}</p>

      {/* tags */}
      {!!exp.tags?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      )}

      {/* expandable details */}
      {exp.details?.length ? (
        <div className="mt-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-cyan-300 hover:text-cyan-200 text-sm inline-flex items-center gap-1"
          >
            {open ? <>Click to hide details <FiChevronUp /></> : <>Click to expand details <FiChevronDown /></>}
          </button>

          {open && (
            <ul className="mt-3 list-disc pl-6 space-y-2 text-white-100">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default ExperienceV2;
