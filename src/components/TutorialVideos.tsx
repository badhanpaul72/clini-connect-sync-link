
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface VideoProps {
  title: string;
  embedId: string;
  description: string;
}

const Video = ({ title, embedId, description }: VideoProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <div className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)] border-2 border-purple-400/30">
        <AspectRatio ratio={16 / 9} className="bg-black/40">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

const TutorialVideos = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <Tabs defaultValue="organization" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-6 bg-purple-900/60 text-white border border-purple-300/20 rounded-xl overflow-hidden">
          <TabsTrigger 
            value="organization" 
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white py-3"
          >
            For Organizations
          </TabsTrigger>
          <TabsTrigger 
            value="doctors"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white py-3"
          >
            For Doctors
          </TabsTrigger>
        </TabsList>
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
