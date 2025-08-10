import React from "react";
import { achievements } from "../../constants";

const Achievment = () => (
  <section id="achievment" className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw]">
    <h2 className="text-4xl font-bold text-white text-center mb-8">ACHIEVEMENTS</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {achievements.map(item => (
        <div
          key={item.id}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-purple-500 shadow-lg transition hover:scale-105"
        >
          <h3 className="text-2xl font-semibold text-purple-400">{item.title}</h3>
          <p className="text-gray-300 mt-2">
            {item.issuer} &mdash; <span className="text-sm">{item.date}</span>
          </p>
          <p className="text-gray-400 mt-2">{item.description}</p>
          {item.link && (
            <a
              href={item.link}
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

export default Achievment;
