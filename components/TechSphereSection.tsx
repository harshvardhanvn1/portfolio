"use client";
import React from "react";
import TechSphere from "./TechSphere";

const skills = [
  "Python", "C", "C++", "Java", "CUDA", 
  "PyTorch", "TensorFlow", "LangChain", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "OpenCV",
  "FastAPI", "Docker", "GitHub Actions",
  "AWS", "GCP", "Athena", "S3", "Airflow", "Spark", "Azure", "Kafka",
  "SQL", "Postgres", "Databricks", "OracleDB", "MongoDB",
  "Typescript", "Next.js", "React.js",
];

const TechSphereSection: React.FC = () => {
  return (
    <section className="py-24">
      <h2 className="heading text-center mb-10">
        <span className="text-purple">Tech I&apos;ve used</span>
      </h2>

      <div className="flex justify-center">
        {/* radius & speed easily tunable */}
        <TechSphere skills={skills} radius={170} baseSpeed={0.22} />
      </div>

      <p className="mt-8 text-center text-white-100">
      </p>
    </section>
  );
};

export default TechSphereSection;
