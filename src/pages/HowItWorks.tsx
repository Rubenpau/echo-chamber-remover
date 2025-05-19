
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Machine Learning Model</CardTitle>
              <CardDescription>
                Understanding the technology behind our fake news detection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our fake news detector uses a sophisticated machine learning model trained on thousands of verified real and fake news articles. The system analyzes various aspects of the text to determine its credibility.
              </p>
              
              <h3 className="text-lg font-semibold mt-4">The Detection Process</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Text Preprocessing</strong>: The input text is cleaned and tokenized, removing stop words and normalizing the text.
                </li>
                <li>
                  <strong>Feature Extraction</strong>: Our model extracts important linguistic features including TF-IDF (Term Frequency-Inverse Document Frequency) vectors, which highlight important words that distinguish real from fake news.
                </li>
                <li>
                  <strong>Classification</strong>: A machine learning algorithm (typically Naive Bayes or Logistic Regression) predicts whether the content is likely real or fake.
                </li>
                <li>
                  <strong>Confidence Scoring</strong>: The model provides a confidence level based on how strongly the patterns match known characteristics of fake or real news.
                </li>
              </ol>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Key Indicators of Fake News</CardTitle>
              <CardDescription>
                Common patterns our model detects in unreliable content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Sensationalist Language</h3>
                  <p className="text-sm">Excessive use of all-caps, multiple exclamation points, and emotionally charged words designed to provoke strong reactions.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Clickbait Headlines</h3>
                  <p className="text-sm">Phrases like "You won't believe" or "Shocking truth" that overpromise or mislead to generate clicks.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Poor Grammar & Structure</h3>
                  <p className="text-sm">Numerous spelling errors, grammatical mistakes, or incoherent sentence structures often indicate low editorial standards.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Lack of Sources</h3>
                  <p className="text-sm">Absence of references to credible sources, experts, or specific data to support claims.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Model Limitations</CardTitle>
              <CardDescription>
                Understanding what our detector can and cannot do
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                While our model is effective at identifying common patterns in fake news, it has certain limitations:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cannot fact-check specific claims against external sources</li>
                <li>May struggle with highly sophisticated deception or subtle misinformation</li>
                <li>Satirical content might be flagged as fake news due to similar linguistic patterns</li>
                <li>Results should be used as one tool in critical evaluation, not as absolute truth</li>
              </ul>
              <p className="mt-4">
                Always verify important information through multiple reputable sources before accepting or sharing it.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
