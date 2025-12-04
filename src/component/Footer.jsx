import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Globe, Terminal } from "lucide-react";
import Starts from "./Starts";

export default function Footer() {
    return (
        // <div className="w-full rounded-xl flex flex-col border-1 border-gray-700 items-center backdrop-blur-xl p-2 sm:p-4 text-white mx-4 lg:mx-0">

        <footer className="w-full mt-10 bg-[#121212] border-t border-gray-700  bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px] backdrop-blur-xl border-t border-cyan-500/20">
            <Starts />
            <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* ABOUT ME */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4 flex gap-2 items-center font-mono"><Terminal />Rahul salunke</h2>
                    <p className="text-gray-400 leading-relaxed font-mono text-sm">
                        Full-Stack Developer who enjoys crafting beautiful UIs, building scalable backend systems, and creating meaningful digital experiences.
                    </p>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4 font-mono">Contact</h2>

                    <div className="space-y-4 text-gray-300 text-sm font-mono">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span>rahul24salunke@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-cyan-400" />
                            <span>+91 9307335620</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span>Sangli, Maharashtra, India</span>
                        </div>
                    </div>
                </div>

                {/* SOCIAL LINKS */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4 font-mono">Follow Me</h2>

                    <div className="flex gap-5 text-gray-300">
                        <a href="#" className="hover:text-cyan-400 transition">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            <Globe className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT BAR */}
            <div className=" py-5 text-center text-gray-500 text-sm font-mono">
                © {new Date().getFullYear()} Rahul Salunke — All Rights Reserved.
            </div>
        </footer>
        // </div>
    );
}
