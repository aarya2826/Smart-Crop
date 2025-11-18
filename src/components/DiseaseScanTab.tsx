import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Bug, Upload, AlertCircle } from "lucide-react";
import { Language, translations } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";

interface DiseaseScanTabProps {
  language: Language;
}

interface DiseaseResult {
  disease: string;
  confidence: number;
  imageUrl?: string;
}

export const DiseaseScanTab = ({ language }: DiseaseScanTabProps) => {
  const t = translations[language];
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const fileInput = document.getElementById('leafImage') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    
    if (!file) {
      toast({
        title: t.error,
        description: 'Please select an image',
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file);
      
      // TODO: Replace with your Flask API endpoint
      const response = await fetch('YOUR_FLASK_API_URL/api/disease-scan', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setResult(data);
      
      toast({
        title: t.success,
        description: `${t.diseaseDetected}: ${data.disease}`,
      });
    } catch (error) {
      toast({
        title: t.error,
        description: 'Failed to scan disease. Using demo data.',
        variant: "destructive",
      });
      
      // Demo fallback
      const diseases = ['Leaf Blight', 'Powdery Mildew', 'Rust', 'Healthy'];
      setResult({
        disease: diseases[Math.floor(Math.random() * diseases.length)],
        confidence: 0.85 + Math.random() * 0.14,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="leafImage" className="flex items-center gap-2">
              <Upload className="h-4 w-4 text-accent" />
              {t.uploadImage}
            </Label>
            <Input
              id="leafImage"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          {previewImage && (
            <div className="rounded-lg overflow-hidden border-2 border-muted">
              <img src={previewImage} alt="Preview" className="w-full h-64 object-cover" />
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? t.loading : t.scanDisease}
          </Button>
        </form>
      </Card>

      {result && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-center gap-3">
            {result.disease.toLowerCase() === 'healthy' ? (
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                  <Bug className="h-8 w-8 text-success" />
                </div>
                <p className="text-xl font-semibold text-success">{result.disease}</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <p className="text-xl font-semibold text-destructive">{result.disease}</p>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">{t.confidence}</p>
            <p className="text-2xl font-bold text-foreground">
              {(result.confidence * 100).toFixed(1)}%
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};
