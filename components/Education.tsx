"use client";
import React from "react";
import { FiCalendar, FiMapPin, FiBookOpen, FiRotateCw } from "react-icons/fi";
import type { Education as EducationType } from "@/data";
import { education } from "@/data";

type CardProps = { edu: EducationType };

const EduCard: React.FC<CardProps> = ({ edu }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className="relative rounded-3xl border border-black-300 bg-black-100/70 backdrop-blur-lg
                 [perspective:1200px] min-h-[260px] cursor-pointer"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((v) => !v)}
      aria-label={`Toggle details for ${edu.degree}`}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT (all centered) */}
        <div className="absolute inset-0 [backface-visibility:hidden] p-5 md:p-7 lg:p-8 flex flex-col h-full">
          <div className="flex flex-col items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-purple/20 border border-black-300
                            flex items-center justify-center text-purple">
              <FiBookOpen />
            </div>

            <div className="min-w-0 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-white-100 font-semibold">{edu.school}</p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-white-100 text-sm">
                <span className="inline-flex items-center gap-1 bg-black-200 border border-black-300 rounded-full px-2.5 py-1">
                  <FiCalendar /> {edu.start} - {edu.end}
                </span>
                <span className="inline-flex items-center gap-1 bg-black-200 border border-black-300 rounded-full px-2.5 py-1">
                  <FiMapPin /> {edu.location}
                </span>
                {edu.gpa && (
                  <span className="inline-flex items-center gap-1 bg-purple/90 text-black rounded-full px-2.5 py-1">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* centered hint at the bottom */}
          <div className="mt-auto flex justify-center items-center">
            <span className="text-white-100/80 text-xs">Click to view key coursework</span>
          </div>
        </div>

        {/* BACK (all centered) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
                        p-5 md:p-7 lg:p-8 flex flex-col h-full">
          <div className="flex items-center justify-center">
            <h4 className="text-white font-semibold text-center">Relevant Coursework</h4>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {edu.coursework.map((c) => (
              <span
                key={c}
                className="px-3 py-1 text-xs rounded-full bg-black-200 border border-black-300 text-white-100"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-auto flex justify-center">
            <span className="text-white-100 text-xs inline-flex items-center gap-1">
              <FiRotateCw /> Click to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section className="py-20" id="education">
      <h2 className="heading text-center">
        <span className="text-purple">Education</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <EduCard key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
