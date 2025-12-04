import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Globe, Terminal, X } from "lucide-react";
import Starts from "./Starts";
import { motion } from "framer-motion";

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        // <div className="w-full rounded-xl flex flex-col border-1 border-gray-700 items-center backdrop-blur-xl p-2 sm:p-4 text-white mx-4 lg:mx-0">

        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="w-full mt-10 bg-[#121212] border-t border-gray-700  bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px] backdrop-blur-xl border-t border-cyan-500/20"
        >
            <Starts />
            <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* ABOUT ME */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl font-semibold text-white mb-4 flex gap-2 items-center font-mono"><Terminal />Rahul salunke</h2>
                    <p className="text-gray-400 leading-relaxed font-mono text-sm">
                        Full-Stack Developer who enjoys crafting beautiful UIs, building scalable backend systems, and creating meaningful digital experiences.
                    </p>
                </motion.div>

                {/* CONTACT INFO */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl font-semibold text-white mb-4 font-mono">Contact</h2>

                    <div className="space-y-4 text-gray-300 text-sm font-mono">
                        <motion.div
                            whileHover={{ x: 5, scale: 1.05 }}
                            className="flex items-center gap-3"
                        >
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span>rahul24salunke@gmail.com</span>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5, scale: 1.05 }}
                            className="flex items-center gap-3"
                        >
                            <Phone className="w-5 h-5 text-cyan-400" />
                            <span>+91 9307335620</span>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5, scale: 1.05 }}
                            className="flex items-center gap-3"
                        >
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span>Sangli, Maharashtra, India</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* SOCIAL LINKS */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-xl font-semibold text-white mb-4 font-mono">Follow Me</h2>

                    <div className="flex gap-5 text-gray-300">
                        <motion.a
                            href="https://www.linkedin.com/in/rahulsalunke24/"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-cyan-400 transition"
                        >
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/rahul24salunke"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-cyan-400 transition"
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/rahul_24salunke"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-cyan-400 transition"
                        >
                            <Instagram className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://x.com/rahul2salunke"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-cyan-400 transition"
                        >
                            <X className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* COPYRIGHT BAR */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className=" py-5 text-center text-gray-500 text-sm font-mono"
            >
                © {new Date().getFullYear()} Rahul Salunke — All Rights Reserved.
            </motion.div>
        </motion.footer>
        // </div>
    );
}
