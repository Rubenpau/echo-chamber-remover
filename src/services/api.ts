
// This is a mock API service to simulate a backend ML model
// In a real application, this would make API calls to a Flask backend

export interface AnalysisResult {
  prediction: 'REAL' | 'FAKE';
  confidence: number;
  explanation: string;
}

// Simulated delay to mimic API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock ML model prediction logic
const mockPredict = (text: string): AnalysisResult => {
  // Simple naive implementation that looks for certain keywords
  // In a real app, this would be done by the ML model
  const lowerText = text.toLowerCase();
  
  // Simplistic rules to simulate a model
  const fakeIndicators = [
    'shock', 'unbelievable', 'won\'t believe', 'shocking', 'secret',
    'conspiracy', 'fraud', '!!!', 'clickbait', 'scam', 'hoax'
  ];
  
  const fakeCount = fakeIndicators.filter(word => lowerText.includes(word)).length;
  
  // Calculate a fake confidence score based on keywords
  let fakeConfidence = fakeCount / fakeIndicators.length;
  fakeConfidence = Math.min(0.95, Math.max(0.05, fakeConfidence * 2));
  
  // Text length also factors in - very short content is more suspicious
  if (text.length < 20) {
    fakeConfidence = Math.min(0.95, fakeConfidence + 0.3);
  }
  
  // Add some randomness for realism
  fakeConfidence += (Math.random() * 0.2) - 0.1;
  fakeConfidence = Math.min(0.98, Math.max(0.02, fakeConfidence));
  
  const realConfidence = 1 - fakeConfidence;
  
  if (realConfidence > fakeConfidence) {
    return {
      prediction: 'REAL',
      confidence: parseFloat(realConfidence.toFixed(2)),
      explanation: 'The content appears credible based on its tone, structure, and lack of sensationalist language.'
    };
  } else {
    return {
      prediction: 'FAKE',
      confidence: parseFloat(fakeConfidence.toFixed(2)),
      explanation: 'The content contains sensationalist language or clickbait markers that are common in misleading news.'
    };
  }
};

export const analyzeText = async (text: string): Promise<AnalysisResult> => {
  // Simulate API call delay
  await delay(1500 + Math.random() * 1000);
  
  return mockPredict(text);
};
