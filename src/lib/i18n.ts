export type Language = 'en' | 'hi' | 'mr';

export const translations = {
  en: {
    appName: 'Smart Crop',
    smartCrop: 'Smart Crop',
    cropSuggestion: 'Crop Suggestion',
    diseaseScan: 'Disease Scan',
    offlineReports: 'Offline Reports',
    officerDashboard: 'Officer Dashboard',
    
    // Smart Crop Form
    cropType: 'Crop Type',
    rainfall: 'Rainfall (mm)',
    temperature: 'Temperature (°C)',
    fertilizer: 'Fertilizer (kg/ha)',
    soilPH: 'Soil pH',
    predictYield: 'Predict Yield',
    
    // Results
    predictedYield: 'Predicted Yield',
    yieldSignal: 'Yield Signal',
    good: 'Good',
    moderate: 'Moderate',
    poor: 'Poor',
    
    // Crop Suggestion
    suggestCrop: 'Suggest Crop',
    recommendedCrop: 'Recommended Crop',
    
    // Disease Scan
    uploadImage: 'Upload Leaf Image',
    scanDisease: 'Scan Disease',
    diseaseDetected: 'Disease Detected',
    confidence: 'Confidence',
    
    // Reports
    noReports: 'No offline reports available',
    report: 'Report',
    
    // Dashboard
    cropYieldByType: 'Crop Yield by Type',
    rainfallVsYield: 'Rainfall vs Yield',
    yieldTrend: 'Crop Yield Trend (2018-2022)',
    weeklyTemp: 'Weekly Temperature Pattern',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
  },
  hi: {
    appName: 'स्मार्ट क्रॉप',
    smartCrop: 'स्मार्ट क्रॉप',
    cropSuggestion: 'फसल सुझाव',
    diseaseScan: 'रोग स्कैन',
    offlineReports: 'ऑफ़लाइन रिपोर्ट',
    officerDashboard: 'अधिकारी डैशबोर्ड',
    
    cropType: 'फसल का प्रकार',
    rainfall: 'वर्षा (मिमी)',
    temperature: 'तापमान (°C)',
    fertilizer: 'उर्वरक (किग्रा/हे)',
    soilPH: 'मृदा pH',
    predictYield: 'उपज की भविष्यवाणी करें',
    
    predictedYield: 'अनुमानित उपज',
    yieldSignal: 'उपज संकेत',
    good: 'अच्छा',
    moderate: 'मध्यम',
    poor: 'खराब',
    
    suggestCrop: 'फसल सुझाएं',
    recommendedCrop: 'अनुशंसित फसल',
    
    uploadImage: 'पत्ती की छवि अपलोड करें',
    scanDisease: 'रोग स्कैन करें',
    diseaseDetected: 'रोग का पता चला',
    confidence: 'विश्वास',
    
    noReports: 'कोई ऑफ़लाइन रिपोर्ट उपलब्ध नहीं',
    report: 'रिपोर्ट',
    
    cropYieldByType: 'प्रकार के अनुसार फसल की उपज',
    rainfallVsYield: 'वर्षा बनाम उपज',
    yieldTrend: 'फसल उपज प्रवृत्ति (2018-2022)',
    weeklyTemp: 'साप्ताहिक तापमान पैटर्न',
    
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
  },
  mr: {
    appName: 'स्मार्ट क्रॉप',
    smartCrop: 'स्मार्ट क्रॉप',
    cropSuggestion: 'पीक सूचना',
    diseaseScan: 'रोग स्कॅन',
    offlineReports: 'ऑफलाइन अहवाल',
    officerDashboard: 'अधिकारी डॅशबोर्ड',
    
    cropType: 'पिकाचा प्रकार',
    rainfall: 'पाऊस (मिमी)',
    temperature: 'तापमान (°C)',
    fertilizer: 'खत (किग्रॅ/हे)',
    soilPH: 'मातीचा pH',
    predictYield: 'उत्पन्नाचा अंदाज लावा',
    
    predictedYield: 'अंदाजित उत्पन्न',
    yieldSignal: 'उत्पन्न सिग्नल',
    good: 'चांगले',
    moderate: 'मध्यम',
    poor: 'खराब',
    
    suggestCrop: 'पीक सुचवा',
    recommendedCrop: 'शिफारस केलेली पीक',
    
    uploadImage: 'पानाची प्रतिमा अपलोड करा',
    scanDisease: 'रोग स्कॅन करा',
    diseaseDetected: 'रोग आढळला',
    confidence: 'विश्वास',
    
    noReports: 'ऑफलाइन अहवाल उपलब्ध नाहीत',
    report: 'अहवाल',
    
    cropYieldByType: 'प्रकारानुसार पीक उत्पन्न',
    rainfallVsYield: 'पाऊस विरुद्ध उत्पन्न',
    yieldTrend: 'पीक उत्पन्न ट्रेंड (2018-2022)',
    weeklyTemp: 'साप्ताहिक तापमान पॅटर्न',
    
    loading: 'लोड होत आहे...',
    error: 'त्रुटी',
    success: 'यश',
  },
};

export const cropTypes = {
  en: ['Wheat', 'Rice', 'Cotton', 'Corn', 'Sugarcane', 'Soybean'],
  hi: ['गेहूं', 'चावल', 'कपास', 'मक्का', 'गन्ना', 'सोयाबीन'],
  mr: ['गहू', 'तांदूळ', 'कापूस', 'मका', 'ऊस', 'सोयाबीन'],
};
