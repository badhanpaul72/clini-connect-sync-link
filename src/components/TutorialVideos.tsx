
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

interface VideoProps {
  title: string;
  embedId: string;
  description: string;
}

const Video = ({ title, embedId, description }: VideoProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <motion.div 
        className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.4)] border-2 border-purple-400/40"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <AspectRatio ratio={16 / 9} className="bg-black/40">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}?rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
          </div>
        </AspectRatio>
      </motion.div>
    </motion.div>
  );
};

const TutorialVideos = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("organization");

  return (
    <div className="w-full">
      <Tabs 
        defaultValue="organization" 
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TabsList className="w-full grid grid-cols-2 mb-6 bg-purple-900/60 text-white border border-purple-300/20 rounded-xl overflow-hidden shadow-lg">
            <TabsTrigger 
              value="organization" 
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white py-3 relative overflow-hidden group"
              onClick={() => setActiveTab("organization")}
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ 
                  opacity: activeTab === "organization" ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center">
                <Info className="w-5 h-5 mr-2" />
                For Organizations
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="doctors"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white py-3 relative overflow-hidden group"
              onClick={() => setActiveTab("doctors")}
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ 
                  opacity: activeTab === "doctors" ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                For Doctors
              </span>
            </TabsTrigger>
          </TabsList>
        </motion.div>
        
        <TabsContent value="organization" className="animate-fade-in">
          <Video 
            title="Tutorial for Organizations" 
            embedId="Tciw9P22YoA" 
            description="Learn how hospitals, nursing homes, and other healthcare organizations can set up and use the CliniSync app to connect with doctors and manage patient visits."
          />
        </TabsContent>
        <TabsContent value="doctors" className="animate-fade-in">
          <Video 
            title="Tutorial for Doctors" 
            embedId="6gEKGlC1vkw" 
            description="Learn how doctors can create accounts, connect with healthcare facilities, and manage their patient visits using the CliniSync app."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TutorialVideos;
