"use client";

import { useState } from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

interface CommitteeMember {
  name: string;
  image: string;
}

interface Committee {
  id: number;
  name: string;
  description: string;
  logo: string;
  members: CommitteeMember[];
}

const commonDescription = "This committee provides a platform for delegates. It is a unique environment crafted to simulate real-world diplomacy. Delegates come together from diverse backgrounds.They represent different ideologies, cultures, and countries. This diversity fosters a vibrant and dynamic environment. Each delegate brings a distinct perspective. These perspectives enrich the discussion. The platform encourages active engagement. It promotes respectful discourse. Delegates are urged to listen and respond thoughtfully. The committee is designed for meaningful debate. Debate here is not mere argumentation. It is a tool for understanding complex global dynamics. Delegates deliberate on pressing issues. They explore different sides of each topic. They examine historical contexts. They consider current events and trends. Every opinion is valued. Every contribution moves the discussion forward. The committee values evidence-based reasoning. Diplomatic skills are central to this simulation. Participants learn how to negotiate effectively. They develop persuasive communication techniques. They practice strategic thinking. They refine public speaking abilities. They learn the importance of empathy in diplomacy. Diplomacy is more than speaking; it's about understanding. It involves collaboration. It demands patience. It requires the ability to compromise. National and global issues are tackled. Delegates address challenges that affect our world. Topics may include climate change. Others may focus on human rights. Economic development is often discussed. Public health crises may also be debated. Delegates research their topics in depth. They prepare position papers. They craft arguments rooted in fact. They think critically about possible solutions. The simulation mirrors real-world processes. Committees resemble actual international and national bodies. These include the United Nations. They may also include national parliaments. Participants are assigned roles. They may act as ambassadors. Some may represent ministers. Others take on the roles of government advisors. Each role has a purpose. Each role contributes to the outcome. Policy-making is a focus of this committee. Delegates simulate the drafting of policies. They analyze the implications of various proposals. They consider how policies impact different groups. They identify stakeholders. They think about enforcement mechanisms. They evaluate the sustainability of solutions. The policy-making process is iterative. It involves research. It requires feedback and revision. Negotiation is another critical skill developed. Delegates work with allies. They also reach out to opponents. They search for common ground. They draft clauses together. They debate wording. They seek balance in representation. They learn to stand firm. But they also learn to yield strategically. They aim for consensus whenever possible.";

const committees: Committee[] = [
  {
    id: 1,
    name: "United Nations Security Council",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "Chairperson", image: "/images/watermelon_head.jpg" },
      { name: "Vice Chair", image: "/images/watermelon_head.jpg" },
      { name: "Director", image: "/images/watermelon_head.jpg" }
    ]
  },
  {
    id: 2,
    name: "United Nations Human Rights Council",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "Chairperson", image: "/images/watermelon_head.jpg" },
      { name: "Vice Chair", image: "/images/watermelon_head.jpg" },
      { name: "Director", image: "/images/watermelon_head.jpg" }
    ],
  },
  {
    id: 3,
    name: "Pakistan National Assembly",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "Speaker", image: "/images/watermelon_head.jpg" },
      { name: "Deputy Speaker", image: "/images/watermelon_head.jpg" },
      { name: "Secretary", image: "/images/watermelon_head.jpg" }
    ]
  },
  {
    id: 4,
    name: "World Health Organization",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "Director-General", image: "/images/watermelon_head.jpg" },
      { name: "Assistant Director", image: "/images/watermelon_head.jpg" },
      { name: "Technical Officer", image: "/images/watermelon_head.jpg" }
    ]
  },
  {
    id: 5,
    name: "United Nations Environment Programme",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "Executive Director", image: "/images/watermelon_head.jpg" },
      { name: "Deputy Director", image: "/images/watermelon_head.jpg" },
      { name: "Programme Officer", image: "/images/watermelon_head.jpg" }
    ]
  },
  {
    id: 6,
    name: "International Court of Justice",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "President", image: "/images/watermelon_head.jpg" },
      { name: "Vice President", image: "/images/watermelon_head.jpg" },
      { name: "Registrar", image: "/images/watermelon_head.jpg" }
    ]
  },
  {
    id: 7,
    name: "UN Women",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "Executive Director", image: "/images/watermelon_head.jpg" },
      { name: "Deputy Director", image: "/images/watermelon_head.jpg" },
      { name: "Programme Specialist", image: "/images/watermelon_head.jpg" }
    ]
  },
  {
    id: 8,
    name: "United Nations Economic and Social Council",
    description: commonDescription,
    logo: "/images/un_logo.png",
    members: [
      { name: "President", image: "/images/watermelon_head.jpg" },
      { name: "Vice President", image: "/images/watermelon_head.jpg" },
      { name: "Secretary", image: "/images/watermelon_head.jpg" }
    ]
  }
];

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.03,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function CommitteePage() {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);

  const openModal = (committee: Committee) => setSelectedCommittee(committee);
  const closeModal = () => setSelectedCommittee(null);

  const handleRegister = (committeeId: number) => console.log(`Registering for committee ${committeeId}`);
  const handleCountryMatrix = (committeeId: number) => console.log(`Opening country matrix for committee ${committeeId}`);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-12 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Committees</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of committees and find the perfect fit for your MUN experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {committees.map((committee) => (
            <Tilt key={committee.id} options={defaultTiltOptions}>
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-sky-100 flex flex-col"
                onClick={() => openModal(committee)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={committee.logo}
                    alt={`${committee.name} logo`}
                    fill
                    className="object-cover w-full h-full"
                    style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150?text=Logo";
                    }}
                  />
                </div>

                <div className="p-4 mt-auto bg-white border-t border-sky-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{committee.name}</h2>
                  <p className="text-gray-600 text-sm line-clamp-2">{committee.description}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        <AnimatePresence>
          {selectedCommittee && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-y-auto shadow-2xl border border-sky-200"
              >
                <div className="flex items-center justify-between p-4 bg-sky-100 border-b border-sky-200 sticky top-0 z-10">
                  <h2 className="text-xl font-semibold text-sky-800">{selectedCommittee.name}</h2>
                  <button
                    onClick={closeModal}
                    className="text-sky-800 text-2xl font-bold hover:text-sky-600"
                  >
                    &times;
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {selectedCommittee.members.map((member, index) => (
                      <div key={index} className="text-center">
                        <div className="h-24 w-24 mx-auto relative rounded-full overflow-hidden border-2 border-sky-200 shadow">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = "https://via.placeholder.com/150?text=Photo";
                            }}
                          />
                        </div>
                        <p className="mt-2 text-sm text-sky-700 font-medium">{member.name}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700">{selectedCommittee.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button
                      onClick={() => handleRegister(selectedCommittee.id)}
                      className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-lg w-full sm:w-auto"
                    >
                      Register Now
                    </button>
                    <button
                      onClick={() => handleCountryMatrix(selectedCommittee.id)}
                      className="bg-white hover:bg-gray-100 text-sky-700 border border-sky-300 font-medium py-2 px-6 rounded-lg w-full sm:w-auto"
                    >
                      View Country Matrix
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}