import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SmartCropTab } from "@/components/SmartCropTab";
import { CropSuggestionTab } from "@/components/CropSuggestionTab";
import { DiseaseScanTab } from "@/components/DiseaseScanTab";
import { OfflineReportsTab } from "@/components/OfflineReportsTab";
import { OfficerDashboardTab } from "@/components/OfficerDashboardTab";
import { Language, translations } from "@/lib/i18n";
import { Sprout, Lightbulb, Bug, FileText, BarChart3 } from "lucide-react";
import logo from "@/components/logo.png";

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={t.appName}
              className="h-10 w-10 rounded-md shadow-sm object-contain bg-primary/5"
            />
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              {t.appName}
            </h1>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Tabs defaultValue="smartcrop" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 gap-2 h-auto p-2">
            <TabsTrigger 
              value="smartcrop" 
              className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Sprout className="h-5 w-5" />
              <span className="text-xs font-medium">{t.smartCrop}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="suggestion" 
              className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Lightbulb className="h-5 w-5" />
              <span className="text-xs font-medium">{t.cropSuggestion}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="disease" 
              className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Bug className="h-5 w-5" />
              <span className="text-xs font-medium">{t.diseaseScan}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="reports" 
              className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <FileText className="h-5 w-5" />
              <span className="text-xs font-medium">{t.offlineReports}</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="dashboard" 
              className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <BarChart3 className="h-5 w-5" />
              <span className="text-xs font-medium">{t.officerDashboard}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="smartcrop">
            <SmartCropTab language={language} />
          </TabsContent>

          <TabsContent value="suggestion">
            <CropSuggestionTab language={language} />
          </TabsContent>

          <TabsContent value="disease">
            <DiseaseScanTab language={language} />
          </TabsContent>

          <TabsContent value="reports">
            <OfflineReportsTab language={language} />
          </TabsContent>

          <TabsContent value="dashboard">
            <OfficerDashboardTab language={language} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
