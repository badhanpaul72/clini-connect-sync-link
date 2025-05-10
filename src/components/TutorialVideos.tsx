
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface VideoProps {
  title: string;
  embedId: string;
  description: string;
}

const Video = ({ title, embedId, description }: VideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-clinic-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <AspectRatio ratio={16 / 9} className="bg-gray-200">
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-clinic-50">
              <Youtube className="w-12 h-12 text-clinic-500" />
              <Button 
                onClick={() => setIsLoaded(true)}
                className="bg-clinic-500 hover:bg-clinic-600"
              >
                Load Video
              </Button>
            </div>
          )}
          {isLoaded && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
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
        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger value="organization">For Organizations</TabsTrigger>
          <TabsTrigger value="doctors">For Doctors</TabsTrigger>
        </TabsList>
        <TabsContent value="organization">
          <Video 
            title="Tutorial for Organizations" 
            embedId="Tciw9P22YoA" 
            description="Learn how hospitals, nursing homes, and other healthcare organizations can set up and use the CliniSync app to connect with doctors and manage patient visits."
          />
        </TabsContent>
        <TabsContent value="doctors">
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
