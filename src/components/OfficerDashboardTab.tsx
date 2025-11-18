import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Calendar, Thermometer } from "lucide-react";
import { Language, translations } from "@/lib/i18n";

interface OfficerDashboardTabProps {
  language: Language;
}

export const OfficerDashboardTab = ({ language }: OfficerDashboardTabProps) => {
  const t = translations[language];

  const charts = [
    {
      id: 1,
      title: t.cropYieldByType,
      icon: BarChart3,
      // TODO: Replace with actual chart URL from Flask: /static/charts/yield_by_type.png
      imageUrl: 'https://via.placeholder.com/400x250/16a34a/ffffff?text=Crop+Yield+Chart',
    },
    {
      id: 2,
      title: t.rainfallVsYield,
      icon: TrendingUp,
      imageUrl: 'https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Rainfall+Chart',
    },
    {
      id: 3,
      title: t.yieldTrend,
      icon: Calendar,
      imageUrl: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Trend+Chart',
    },
    {
      id: 4,
      title: t.weeklyTemp,
      icon: Thermometer,
      imageUrl: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Temperature+Chart',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {charts.map((chart) => {
          const Icon = chart.icon;
          return (
            <Card key={chart.id} className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{chart.title}</h3>
              </div>
              <div className="rounded-lg overflow-hidden border border-muted">
                <img 
                  src={chart.imageUrl} 
                  alt={chart.title}
                  className="w-full h-auto"
                />
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-muted/50">
        <p className="text-sm text-muted-foreground text-center">
          💡 <strong>Note:</strong> Replace placeholder images with actual Matplotlib charts from your Flask API
          <br />
          <code className="text-xs mt-2 inline-block">YOUR_FLASK_API_URL/static/charts/chart_name.png</code>
        </p>
      </Card>
    </div>
  );
};
