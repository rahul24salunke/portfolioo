import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Instagram, Github, Globe } from "lucide-react";

export default function Contact() {
    return (
        <div className="w-full lg:w-auto lg:max-w-sm mt-6 lg:mt-10 rounded-xl flex flex-col border-1 border-gray-700 items-center bg-[#38383878] backdrop-blur-xl p-2 sm:p-4 text-white mx-4 lg:mx-0">
        <Card
            className="
                w-full max-w-sm mx-auto p-4 sm:p-6 rounded-3xl 
                bg-[#38383878] backdrop-blur-xl 
                border border-white/10 
                shadow-[0_0_40px_rgba(0,0,0,0.35)]
                flex flex-col items-center
            "
        >
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-md">
                <img
                    src="/icon.jpg"  // replace with your image
                    alt="profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white font-mono text-center px-2">
                Rahul Salunke
            </h1>

            {/* Role */}
            <div className="mt-1 bg-white/10 px-3 sm:px-4 py-1 rounded-xl font-mono text-white text-xs sm:text-sm">
                Full-Stack Developer
            </div>

            {/* Divider */}
            <div className="w-full my-3 border-t border-white/10" />

            {/* Contact Info */}
            <div className="w-full space-y-4 sm:space-y-5 px-2">

                {/* Email */}
                <div className="flex items-center gap-3 sm:gap-4 font-mono">
                    <div className="p-2 sm:p-3 rounded-xl bg-white/5 shadow-inner flex-shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-400">EMAIL</p>
                        <p className="text-xs sm:text-sm text-white break-words">
                            rahul24salunke@gmail.com
                        </p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-xl bg-white/5 shadow-inner flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-400">LOCATION</p>
                        <p className="text-xs sm:text-sm text-white">Sangli, India</p>
                    </div>
                </div>

            </div>

            {/* Social Icons */}
            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 lg:gap-5 text-white/80">
                <a href="#" className="hover:text-white transition">
                    <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                    <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                    <Globe size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                    <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
            </div>
        </Card>
    </div>
    );
}
