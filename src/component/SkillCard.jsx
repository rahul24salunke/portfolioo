import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const SkillItem = ({ icon, text, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, x: 5 }}
    className="flex items-center gap-2 sm:gap-3 bg-[#1a1d22]/50 p-1.5 sm:p-2 rounded-lg border border-transparent hover:border-cyan-500/30 transition-all duration-200"
  >
    <div className="flex-shrink-0">{icon}</div>
    <span className="text-xs sm:text-sm text-gray-300 font-mono">{text}</span>
  </motion.div>
);

const SkillCard = ({ title, icon: Icon, skills }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Card
      className="
        bg-[#38383878] border border-cyan-500/20 
        rounded-2xl backdrop-blur-xl 
        p-4 sm:p-6 shadow-[0_0_10px_rgba(0,255,255,0.08)]
        hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]
        hover:border-cyan-500/40
        transition-all duration-300
      "
    >
    <CardHeader className="pb-3 sm:pb-4">
      <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-white font-mono">
        <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
        </div>
        {title}
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-2 sm:space-y-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} icon={skill.icon} text={skill.text} index={index} />
      ))}
    </CardContent>
  </Card>
  </motion.div>
);

export default SkillCard;
