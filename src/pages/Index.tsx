
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { analyzeText, AnalysisResult } from '@/services/api';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import Layout from '@/components/Layout';
import AnalysisResultView from '@/components/AnalysisResultView';

const Index = () => {
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsAnalyzing(true);
      setResult(null);
      
      const analysisResult = await analyzeText(newsText);
      setResult(analysisResult);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Something went wrong while analyzing the text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setNewsText('');
    setResult(null);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Fake News Detector</h1>
          <p className="text-xl text-muted-foreground">
            Analyze news articles and headlines to determine their credibility
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>News Analysis</CardTitle>
            <CardDescription>
              Enter a news headline or article text to analyze its credibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="Enter news headline or article text here..."
                className="min-h-[200px] mb-4"
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                disabled={isAnalyzing}
              />
              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={handleReset}
                  disabled={isAnalyzing || (!newsText && !result)}
                >
                  Reset
                </Button>
                <Button 
                  type="submit" 
                  disabled={isAnalyzing || !newsText.trim()}
                  className="bg-purple hover:bg-purple-dark"
                >
                  {isAnalyzing ? (
                    <>
                      <LoadingSpinner className="mr-2" />
                      Analyzing...
                    </>
                  ) : 'Analyze Text'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {isAnalyzing && (
          <div className="text-center py-12">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-muted-foreground">
              Analyzing content with our advanced machine learning model...
            </p>
          </div>
        )}

        {result && !isAnalyzing && (
          <AnalysisResultView result={result} />
        )}
      </div>
    </Layout>
  );
};

export default Index;
