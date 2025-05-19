
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Our Project</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Building tools for information integrity in the digital age
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Fake News Detector was created to address the growing challenge of misinformation in our media ecosystem. Our mission is to empower people with technological tools that help them make more informed decisions about the content they consume and share.
            </p>
            
            <p>
              In today's fast-paced information environment, misleading content can spread rapidly before being fact-checked. Our project aims to provide an immediate first-line screening tool that can help users pause and consider content credibility before accepting or sharing it.
            </p>
            
            <p>
              We believe in the importance of critical thinking and media literacy, and our tool is designed to complement—not replace—these essential skills.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Approach</CardTitle>
            <CardDescription>
              Combining machine learning with accessible design
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We've built our system using modern machine learning techniques trained on datasets containing both verified real news and identified fake news from various sources. Our approach focuses on linguistic patterns, structural elements, and stylistic choices that often differentiate credible from misleading content.
            </p>
            
            <p>
              Rather than making absolute judgments, our system provides confidence levels and explanations to help users understand why content might be flagged as potentially misleading. We believe transparency in AI systems is crucial, especially when they're used for evaluating information credibility.
            </p>
            
            <p>
              The user interface is designed with accessibility and ease-of-use in mind, making powerful machine learning technology available to everyone without requiring technical expertise.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Development</CardTitle>
            <CardDescription>
              Our commitment to continuous improvement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Fake News Detector is an evolving project. We continuously refine our models, incorporate new datasets, and improve our algorithms to better detect emerging patterns of misinformation.
            </p>
            
            <p>
              We're committed to addressing biases in our system and ensuring our tool works equitably across different topics and content types. We welcome feedback from users and experts to help guide our development priorities.
            </p>
            
            <p>
              Future developments may include more fine-grained analysis capabilities, integration with trusted fact-checking resources, and expanded educational components to help users better understand how to evaluate information credibility.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
