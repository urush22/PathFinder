"use client"

import type React from "react"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PathFinderLogo } from "@/components/pathfinder-logo"
import {
  Target,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  XCircle,
  TrendingUp,
  Download,
  RefreshCw,
  Star,
  Lightbulb,
  Home,
  MessageSquare,
  Briefcase,
  User,
  LogOut,
} from "lucide-react"

interface ResumeAnalysis {
  overallScore: number
  sections: {
    [key: string]: {
      score: number
      status: "excellent" | "good" | "needs-improvement" | "missing"
      feedback: string[]
      suggestions: string[]
    }
  }
  keywords: {
    found: string[]
    missing: string[]
    suggestions: string[]
  }
  strengths: string[]
  improvements: string[]
}

export default function ResumeParserPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.clear()
    window.location.href = "/login"
  }

  // Mock analysis data - in real app, this would come from AI analysis
  const mockAnalysis: ResumeAnalysis = {
    overallScore: 78,
    sections: {
      "Contact Information": {
        score: 95,
        status: "excellent",
        feedback: ["Complete contact details provided", "Professional email address", "LinkedIn profile included"],
        suggestions: ["Consider adding a portfolio website link"],
      },
      "Professional Summary": {
        score: 72,
        status: "good",
        feedback: ["Clear career objective stated", "Relevant experience highlighted"],
        suggestions: [
          "Make it more specific to target role",
          "Add quantifiable achievements",
          "Keep it concise (2-3 lines)",
        ],
      },
      "Work Experience": {
        score: 85,
        status: "excellent",
        feedback: ["Relevant work experience listed", "Good use of action verbs", "Quantified achievements"],
        suggestions: ["Add more specific metrics", "Include recent projects"],
      },
      Education: {
        score: 90,
        status: "excellent",
        feedback: ["Relevant degree mentioned", "GPA included", "Graduation date clear"],
        suggestions: ["Add relevant coursework if space allows"],
      },
      Skills: {
        score: 65,
        status: "needs-improvement",
        feedback: ["Technical skills listed", "Some relevant technologies mentioned"],
        suggestions: [
          "Organize skills by category",
          "Add proficiency levels",
          "Include more industry-relevant skills",
          "Remove outdated technologies",
        ],
      },
      Projects: {
        score: 45,
        status: "needs-improvement",
        feedback: ["Few projects mentioned"],
        suggestions: [
          "Add 2-3 relevant projects",
          "Include project descriptions",
          "Mention technologies used",
          "Add project links if available",
        ],
      },
      Certifications: {
        score: 0,
        status: "missing",
        feedback: ["No certifications found"],
        suggestions: [
          "Add relevant certifications",
          "Include online course completions",
          "Mention professional development activities",
        ],
      },
    },
    keywords: {
      found: ["JavaScript", "React", "Node.js", "Git", "Agile", "Problem-solving"],
      missing: ["TypeScript", "AWS", "Docker", "CI/CD", "Testing", "API Development"],
      suggestions: ["Add cloud platform experience", "Include testing frameworks", "Mention DevOps tools"],
    },
    strengths: [
      "Strong technical foundation with modern web technologies",
      "Good work experience progression",
      "Clear educational background",
      "Quantified achievements in work experience",
    ],
    improvements: [
      "Add more personal projects to showcase skills",
      "Include relevant certifications or online courses",
      "Improve skills section organization",
      "Add missing industry-relevant keywords",
      "Strengthen professional summary with specific achievements",
    ],
  }

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type === "application/pdf" || file.type.includes("document")) {
        setUploadedFile(file)
      }
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const analyzeResume = async () => {
    if (!uploadedFile) return

    setIsAnalyzing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setAnalysis(mockAnalysis)
    setIsAnalyzing(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "good":
        return <CheckCircle className="w-5 h-5 text-blue-600" />
      case "needs-improvement":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
      case "missing":
        return <XCircle className="w-5 h-5 text-red-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-50 border-green-200"
      case "good":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "needs-improvement":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "missing":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <PathFinderLogo />
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/resume-parser"
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium relative group flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume Parser
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600" />
            </Link>
            <Link
              href="/interview-practice"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Interview
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Jobs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/profile"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Profile
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hover:bg-red-50 hover:text-red-700 transition-all flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Resume Parser</h1>
            <p className="text-muted-foreground">
              Get instant feedback on your resume with AI-powered analysis and personalized suggestions
            </p>
          </div>

          {!analysis ? (
            /* Upload Section */
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <FileText className="w-6 h-6" />
                  Upload Your Resume
                </CardTitle>
                <CardDescription>Upload your resume in PDF or DOC format for detailed analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload Area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium">{uploadedFile ? uploadedFile.name : "Drop your resume here"}</p>
                    <p className="text-muted-foreground">or click to browse files</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>

                {uploadedFile && (
                  <Alert>
                    <FileText className="w-4 h-4" />
                    <AlertDescription>
                      File uploaded: {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </AlertDescription>
                  </Alert>
                )}

                {/* Analyze Button */}
                <div className="text-center">
                  <Button onClick={analyzeResume} disabled={!uploadedFile || isAnalyzing} size="lg" className="px-8">
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing Resume...
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Analyze Resume
                      </>
                    )}
                  </Button>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">AI-Powered Scoring</h3>
                    <p className="text-sm text-muted-foreground">Get an overall score and section-wise analysis</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Smart Suggestions</h3>
                    <p className="text-sm text-muted-foreground">Receive personalized improvement recommendations</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">ATS Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure your resume passes applicant tracking systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Analysis Results */
            <div className="space-y-6">
              {/* Overall Score */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-6 h-6" />
                      Resume Analysis Results
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setAnalysis(null)
                          setUploadedFile(null)
                        }}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload New Resume
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-1">{analysis.overallScore}/100</div>
                      <div className="text-sm text-muted-foreground">Overall Score</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Resume Strength</span>
                        <span>{analysis.overallScore}%</span>
                      </div>
                      <Progress value={analysis.overallScore} className="h-3" />
                      <div className="text-sm text-muted-foreground mt-1">
                        {analysis.overallScore >= 80
                          ? "Excellent resume!"
                          : analysis.overallScore >= 60
                            ? "Good resume with room for improvement"
                            : "Needs significant improvements"}
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="sections" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="sections">Section Analysis</TabsTrigger>
                      <TabsTrigger value="keywords">Keywords</TabsTrigger>
                      <TabsTrigger value="strengths">Strengths</TabsTrigger>
                      <TabsTrigger value="improvements">Improvements</TabsTrigger>
                    </TabsList>

                    <TabsContent value="sections" className="space-y-4">
                      {Object.entries(analysis.sections).map(([section, data]) => (
                        <Card key={section} className={`border-l-4 ${getStatusColor(data.status)}`}>
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center justify-between text-lg">
                              <span className="flex items-center gap-2">
                                {getStatusIcon(data.status)}
                                {section}
                              </span>
                              <Badge variant="outline" className={getStatusColor(data.status)}>
                                {data.score}/100
                              </Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {data.feedback.length > 0 && (
                              <div>
                                <h4 className="font-medium text-sm mb-2">Current Status:</h4>
                                <ul className="text-sm space-y-1">
                                  {data.feedback.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {data.suggestions.length > 0 && (
                              <div>
                                <h4 className="font-medium text-sm mb-2">Suggestions for Improvement:</h4>
                                <ul className="text-sm space-y-1">
                                  {data.suggestions.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <Lightbulb className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="keywords" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-green-600">Found Keywords</CardTitle>
                            <CardDescription>Keywords already present in your resume</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {analysis.keywords.found.map((keyword) => (
                                <Badge key={keyword} className="bg-green-100 text-green-800 border-green-200">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-red-600">Missing Keywords</CardTitle>
                            <CardDescription>Important keywords to consider adding</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {analysis.keywords.missing.map((keyword) => (
                                <Badge key={keyword} variant="outline" className="border-red-200 text-red-600">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Keyword Suggestions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {analysis.keywords.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="strengths" className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-green-600">Your Resume Strengths</CardTitle>
                          <CardDescription>What you're doing well</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {analysis.strengths.map((strength, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="improvements" className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-600">Priority Improvements</CardTitle>
                          <CardDescription>Focus on these areas to boost your resume score</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {analysis.improvements.map((improvement, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>{improvement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
