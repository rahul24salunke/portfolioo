import {
    Monitor,
    Server,
    Code,
    Type,
    LayoutGrid,
    GitBranch,
    Figma,
    Globe,
    Database,
    Bot,
    Settings,
} from "lucide-react";

import SkillCard from "../SkillCard";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

const SKILL_DATA = [
    {
        title: "Front-End",
        icon: Monitor,
        skills: [
            { icon: <Code className="w-4 h-4 text-orange-400" />, text: "React.js" },
            { icon: <Type className="w-4 h-4 text-blue-500" />, text: "TypeScript" },
            { icon: <Globe className="w-4 h-4 text-green-400" />, text: "Tailwind CSS" },
            { icon: <Globe className="w-4 h-4 text-zinc-300" />, text: "shadcn/ui" },
            { icon: <Figma className="w-4 h-4 text-pink-400" />, text: "HTML/CSS" },

        ],
    },
    {
        title: "Back-End & Database",
        icon: Server,
        skills: [
            { icon: <Code className="w-4 h-4 text-green-500" />, text: "Node.js" },
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "Express.js" },
            { icon: <Database className="w-4 h-4 text-blue-400" />, text: "PostgreSQL" },
            { icon: <Database className="w-4 h-4 text-green-400" />, text: "MongoDB" },
            { icon: <Database className="w-4 h-4 text-gray-300" />, text: "MySql" },
        ],
    },
    {
        title: "Tools & Workflow",
        icon: Bot,
        skills: [
            { icon: <GitBranch className="w-4 h-4 text-red-500" />, text: "Git & GitHub" },
            { icon: <Settings className="w-4 h-4 text-yellow-500" />, text: "Vercel" },
            { icon: <Code className="w-4 h-4 text-cyan-300" />, text: "VS Code" },
            { icon: <Type className="w-4 h-4 text-gray-400" />, text: "npm / yarn / pnpm" },
            { icon: <FaDocker className="w-4 h-4 text-gray-400" />, text: "Docker" },

        ],
    },
];

const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="w-full max-w-5xl mx-auto mb-10 bg-[#38383878] backdrop-blur-xl border-1 border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-10 mx-4 lg:mx-auto"
        >

            {/* SECTION HEADER */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10"
            >
                <div className="p-2 sm:p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-white tracking-tight">
                        Skills Stack
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-0.5 sm:w-12 bg-[#52B3C7] mt-2 rounded-full"
                    />

                </div>
            </motion.div>

            {/* SKILL GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {SKILL_DATA.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut"
                                }
                            }
                        }}
                    >
                        <SkillCard
                            title={category.title}
                            icon={category.icon}
                            skills={category.skills}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsSection;
