import React from "react";
import { certificates } from "../../constants";

const Certificate = () => (
  <section id="certificate" className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw]">
    <h2 className="text-4xl font-bold text-white text-center mb-8">CERTIFICATES</h2>
    <div className="grid gap-8 md:grid-cols-2">
        
      {certificates.map(cert => (
        <div
          key={cert.id}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-purple-500 shadow-lg transition hover:scale-105"
        >
          <h3 className="text-2xl font-semibold text-purple-400">{cert.title}</h3>
          <p className="text-gray-300 mt-2">{cert.issuer} &mdash; <span className="text-sm">{cert.date}</span></p>
          <p className="text-gray-400 mt-2">{cert.description}</p>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-purple-300 underline"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Certificate;