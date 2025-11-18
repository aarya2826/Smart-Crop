import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudRain, Thermometer, TestTube, Lightbulb } from "lucide-react";
import { Language, translations } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";

interface CropSuggestionTabProps {
  language: Language;
}

export const CropSuggestionTab = ({ language }: CropSuggestionTabProps) => {
  const t = translations[language];
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [suggestedCrop, setSuggestedCrop] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    rainfall: '',
    temperature: '',
    soilPH: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Replace with your Flask API endpoint
      const response = await fetch('YOUR_FLASK_API_URL/api/suggest-crop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setSuggestedCrop(data.crop);
      
      toast({
        title: t.success,
        description: `${t.recommendedCrop}: ${data.crop}`,
      });
    } catch (error) {
      toast({
        title: t.error,
        description: 'Failed to suggest crop. Using demo data.',
        variant: "destructive",
      });
      
      // Demo fallback
      const crops = ['Wheat', 'Rice', 'Cotton', 'Corn'];
      setSuggestedCrop(crops[Math.floor(Math.random() * crops.length)]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <CloudRain className="h-4 w-4 text-accent" />
              {t.rainfall}
            </Label>
            <Input
              type="number"
              placeholder="1200"
              value={formData.rainfall}
              onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-destructive" />
              {t.temperature}
            </Label>
            <Input
              type="number"
              placeholder="28"
              value={formData.temperature}
              onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <TestTube className="h-4 w-4 text-muted-foreground" />
              {t.soilPH}
            </Label>
            <Input
              type="number"
              step="0.1"
              placeholder="6.5"
              value={formData.soilPH}
              onChange={(e) => setFormData({ ...formData, soilPH: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? t.loading : t.suggestCrop}
          </Button>
        </form>
      </Card>

      {suggestedCrop && (
        <Card className="p-6 bg-primary/5 border-primary">
          <div className="text-center space-y-3">
            <Lightbulb className="h-12 w-12 text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">{t.recommendedCrop}</p>
            <p className="text-3xl font-bold text-primary">{suggestedCrop}</p>
          </div>
        </Card>
      )}
    </div>
  );
};
