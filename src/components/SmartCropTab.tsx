import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, CloudRain, Thermometer, Beaker, TestTube } from "lucide-react";
import { Language, translations, cropTypes } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";

interface SmartCropTabProps {
  language: Language;
}

interface YieldResult {
  yield: number;
  signal: 'green' | 'yellow' | 'red';
}

export const SmartCropTab = ({ language }: SmartCropTabProps) => {
  const t = translations[language];
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<YieldResult | null>(null);
  
  const [formData, setFormData] = useState({
    crop: '',
    rainfall: '',
    temperature: '',
    fertilizer: '',
    soilPH: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Replace with your Flask API endpoint
      const response = await fetch('YOUR_FLASK_API_URL/api/predict-yield', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setResult(data);
      
      toast({
        title: t.success,
        description: `${t.predictedYield}: ${data.yield} tons/ha`,
      });
    } catch (error) {
      toast({
        title: t.error,
        description: 'Failed to predict yield. Using demo data.',
        variant: "destructive",
      });
      
      // Demo fallback
      const demoYield = 3.5 + Math.random() * 2;
      const demoSignal: 'green' | 'yellow' | 'red' = 
        demoYield > 4.5 ? 'green' : demoYield > 3 ? 'yellow' : 'red';
      setResult({ yield: parseFloat(demoYield.toFixed(2)), signal: demoSignal });
    } finally {
      setLoading(false);
    }
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'green': return 'bg-success text-success-foreground';
      case 'yellow': return 'bg-warning text-warning-foreground';
      case 'red': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted';
    }
  };

  const getSignalText = (signal: string) => {
    switch (signal) {
      case 'green': return t.good;
      case 'yellow': return t.moderate;
      case 'red': return t.poor;
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Sprout className="h-4 w-4 text-primary" />
              {t.cropType}
            </Label>
            <Select value={formData.crop} onValueChange={(value) => setFormData({ ...formData, crop: value })}>
              <SelectTrigger>
                <SelectValue placeholder={t.cropType} />
              </SelectTrigger>
              <SelectContent>
                {cropTypes[language].map((crop, idx) => (
                  <SelectItem key={idx} value={crop}>{crop}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
              <Beaker className="h-4 w-4 text-secondary" />
              {t.fertilizer}
            </Label>
            <Input
              type="number"
              placeholder="250"
              value={formData.fertilizer}
              onChange={(e) => setFormData({ ...formData, fertilizer: e.target.value })}
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
            {loading ? t.loading : t.predictYield}
          </Button>
        </form>
      </Card>

      {result && (
        <Card className="p-6 space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">{t.predictedYield}</p>
            <p className="text-4xl font-bold text-primary">{result.yield} tons/ha</p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">{t.yieldSignal}</p>
            <div className={`inline-block px-6 py-2 rounded-full font-semibold ${getSignalColor(result.signal)}`}>
              {getSignalText(result.signal)}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
