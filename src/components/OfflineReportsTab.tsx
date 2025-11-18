import { Card } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";
import { Language, translations } from "@/lib/i18n";

interface OfflineReportsTabProps {
  language: Language;
}

const mockReports = [
  { id: 1, title: 'Yield Report - March 2024', date: '2024-03-15', type: 'yield' },
  { id: 2, title: 'Disease Scan Report', date: '2024-03-10', type: 'disease' },
  { id: 3, title: 'Crop Suggestion Report', date: '2024-03-05', type: 'suggestion' },
  { id: 4, title: 'Yield Report - February 2024', date: '2024-02-28', type: 'yield' },
];

export const OfflineReportsTab = ({ language }: OfflineReportsTabProps) => {
  const t = translations[language];

  return (
    <div className="space-y-4">
      {mockReports.length === 0 ? (
        <Card className="p-8 text-center">
          <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">{t.noReports}</p>
        </Card>
      ) : (
        mockReports.map((report) => (
          <Card key={report.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{report.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{report.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};
