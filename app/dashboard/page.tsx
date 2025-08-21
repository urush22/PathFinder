"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PathFinderLogo } from "@/components/pathfinder-logo"
import {
  User,
  FileText,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Calendar,
  MapPin,
  Star,
  Upload,
  Play,
  Home,
  LogOut,
} from "lucide-react"

export default function DashboardPage() {
  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.clear()
    window.location.href = "/login"
  }

  const [user] = useState({
    name: "Alex Johnson",
    role: "Software Engineer",
    location: "San Francisco, CA",
    profileCompletion: 85,
    resumeScore: 78,
  })

  const [stats] = useState({
    applicationsSubmitted: 12,
    interviewsScheduled: 3,
    offersReceived: 1,
    profileViews: 45,
  })

  const [recentActivity] = useState([
    { type: "application", company: "Google", role: "Software Engineer Intern", date: "2 days ago" },
    { type: "interview", company: "Microsoft", role: "Frontend Developer", date: "1 week ago" },
    { type: "offer", company: "Startup Inc", role: "Full Stack Developer", date: "2 weeks ago" },
  ])

  const [recommendedJobs] = useState([
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Meta",
      location: "Menlo Park, CA",
      type: "Internship",
      match: 95,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Airbnb",
      location: "San Francisco, CA",
      type: "Full-time",
      match: 88,
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Stripe",
      location: "Remote",
      type: "Internship",
      match: 82,
      posted: "3 days ago",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <PathFinderLogo />
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium relative group flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600" />
            </Link>
            <Link
              href="/resume-parser"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume Parser
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Here's what's happening with your career journey today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{stats.applicationsSubmitted}</div>
                  <div className="text-sm text-muted-foreground">Applications</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">{stats.interviewsScheduled}</div>
                  <div className="text-sm text-muted-foreground">Interviews</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.offersReceived}</div>
                  <div className="text-sm text-muted-foreground">Offers</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.profileViews}</div>
                  <div className="text-sm text-muted-foreground">Profile Views</div>
                </CardContent>
              </Card>
            </div>

            {/* Recommended Jobs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Recommended for You
                </CardTitle>
                <CardDescription>Jobs that match your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline" className="text-primary">
                          {job.match}% match
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{job.company}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Link href="/jobs">
                    <Button variant="outline">View All Jobs</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "offer"
                          ? "bg-green-500"
                          : activity.type === "interview"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium">
                        {activity.type === "offer" && "Offer received from "}
                        {activity.type === "interview" && "Interview scheduled with "}
                        {activity.type === "application" && "Applied to "}
                        {activity.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.role} • {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Strength</span>
                    <span>{user.profileCompletion}%</span>
                  </div>
                  <Progress value={user.profileCompletion} />
                </div>
                <Link href="/profile">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Complete Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Resume Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Resume Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current Score</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {user.resumeScore}/100
                    </span>
                  </div>
                  <Progress value={user.resumeScore} />
                </div>
                <div className="space-y-2">
                  <Link href="/resume-parser">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Resume
                    </Button>
                  </Link>
                  <Link href="/resume-parser">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <FileText className="w-4 h-4 mr-2" />
                      Improve Score
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Interview Practice */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Interview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Practice with AI-powered mock interviews tailored to your target companies.
                </p>
                <Link href="/interview-practice">
                  <Button size="sm" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Start Practice
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
