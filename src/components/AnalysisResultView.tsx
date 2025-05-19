
import React from 'react';
import { AnalysisResult } from '@/services/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface AnalysisResultViewProps {
  result: AnalysisResult;
}

const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({ result }) => {
  const isReal = result.prediction === 'REAL';
  const confidencePercentage = Math.round(result.confidence * 100);
  
  return (
    <Card className="mb-8 overflow-hidden">
      <div className={`h-2 ${isReal ? 'bg-real' : 'bg-fake'}`}></div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Analysis Result</span>
        </CardTitle>
        <CardDescription>
          Our AI model has completed the credibility analysis
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Alert className={`border-2 ${isReal ? 'border-real' : 'border-fake'}`}>
          <div className="flex items-center gap-3">
            {isReal ? (
              <CheckCircle className="h-6 w-6 text-real" />
            ) : (
              <AlertCircle className="h-6 w-6 text-fake" />
            )}
            <div>
              <AlertTitle className="text-xl font-bold">
                {isReal ? 'Likely Real' : 'Likely Fake'}
              </AlertTitle>
              <AlertDescription>
                {result.explanation}
              </AlertDescription>
            </div>
          </div>
        </Alert>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">Confidence Level</span>
            <span className="font-bold">{confidencePercentage}%</span>
          </div>
          <Progress 
            value={confidencePercentage} 
            className={`h-3 ${isReal ? 'bg-muted text-real' : 'bg-muted text-fake'}`} 
          />
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-semibold mb-2">What does this result mean?</h4>
          <p className="text-sm">
            {isReal ? (
              "Our model indicates this content is likely credible. However, always verify information from multiple reputable sources."
            ) : (
              "Our model detected patterns commonly found in misleading content. Consider fact-checking with trusted sources before sharing."
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalysisResultView;
