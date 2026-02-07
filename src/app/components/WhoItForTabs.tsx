"use client";

import { useState } from "react";

const founderBullets = [
  "You have a real solution but struggle to articulate it clearly",
  "You want investors to see the full picture, not just your deck",
  "You’re hiring and need mission to attract the right people",
  "You believe your work serves something bigger than profit",
];

const partnerBullets = [
  "You run an agency or consultancy serving founders",
  "You want to offer narrative and positioning as a core offering",
  "You’re looking for a repeatable system, not one-off projects",
  "You care about depth over volume",
];

export function WhoItForTabs() {
  const [activeTab, setActiveTab] = useState<"founders" | "partners">(
    "founders"
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex border-b border-[#dadce0] mb-8">
        <button
          onClick={() => setActiveTab("founders")}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "founders"
              ? "text-[#4285f4] border-b-2 border-[#4285f4]"
              : "text-[#5f6368] hover:text-[#202124]"
          }`}
        >
          Founders
        </button>
        <button
          onClick={() => setActiveTab("partners")}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "partners"
              ? "text-[#4285f4] border-b-2 border-[#4285f4]"
              : "text-[#5f6368] hover:text-[#202124]"
          }`}
        >
          Agencies / Partners
        </button>
      </div>

      <div className="min-h-[220px]">
        {activeTab === "founders" && (
          <div className="animate-fade-in">
            <h3 className="text-base font-medium text-[#202124] mb-4">
              This is for you if…
            </h3>
            <ul className="space-y-3">
              {founderBullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-[#5f6368] text-[15px]">
                  <span className="text-[#4285f4] mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "partners" && (
          <div className="animate-fade-in">
            <h3 className="text-base font-medium text-[#202124] mb-4">
              This is for you if…
            </h3>
            <ul className="space-y-3">
              {partnerBullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-[#5f6368] text-[15px]">
                  <span className="text-[#4285f4] mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
