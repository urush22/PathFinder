"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PathFinderLogo } from "@/components/pathfinder-logo"
import {
  Search,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Heart,
  ExternalLink,
  Filter,
  Building,
  Clock,
  Users,
  TrendingUp,
  Home,
  FileText,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: "internship" | "full-time" | "part-time" | "contract"
  remote: boolean
  salary?: string
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
  applicationDeadline?: string
  matchPercentage: number
  companyLogo?: string
  companySize: string
  industry: string
  experienceLevel: "entry" | "mid" | "senior"
  skills: string[]
  saved: boolean
  applied: boolean
}

const mockJobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    type: "internship",
    remote: false,
    salary: "$8,000 - $10,000/month",
    description:
      "Join our team to work on cutting-edge technologies that impact billions of users worldwide. You'll collaborate with experienced engineers on real projects.",
    requirements: [
      "Computer Science or related field",
      "Proficiency in Python, Java, or C++",
      "Strong problem-solving skills",
    ],
    benefits: ["Health insurance", "Free meals", "Learning stipend", "Mentorship program"],
    postedDate: "2 days ago",
    applicationDeadline: "March 15, 2025",
    matchPercentage: 95,
    companySize: "10,000+ employees",
    industry: "Technology",
    experienceLevel: "entry",
    skills: ["Python", "Java", "Algorithms", "Data Structures"],
    saved: false,
    applied: false,
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Meta",
    location: "Menlo Park, CA",
    type: "internship",
    remote: true,
    salary: "$7,500 - $9,500/month",
    description:
      "Build user interfaces for products used by billions of people. Work with React, TypeScript, and modern web technologies.",
    requirements: [
      "Experience with React and JavaScript",
      "Understanding of web technologies",
      "Portfolio of projects",
    ],
    benefits: ["Remote work", "Health benefits", "Stock options", "Professional development"],
    postedDate: "1 week ago",
    applicationDeadline: "March 20, 2025",
    matchPercentage: 88,
    companySize: "10,000+ employees",
    industry: "Social Media",
    experienceLevel: "entry",
    skills: ["React", "JavaScript", "TypeScript", "CSS"],
    saved: true,
    applied: false,
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "internship",
    remote: false,
    salary: "$8,500 - $11,000/month",
    description:
      "Analyze user behavior data to improve content recommendations and user experience across our platform.",
    requirements: ["Statistics or Data Science background", "Python and SQL proficiency", "Machine learning knowledge"],
    benefits: ["Unlimited PTO", "Health insurance", "Netflix subscription", "Learning budget"],
    postedDate: "3 days ago",
    applicationDeadline: "April 1, 2025",
    matchPercentage: 82,
    companySize: "5,000-10,000 employees",
    industry: "Entertainment",
    experienceLevel: "entry",
    skills: ["Python", "SQL", "Machine Learning", "Statistics"],
    saved: false,
    applied: true,
  },
  {
    id: 4,
    title: "Product Manager Intern",
    company: "Airbnb",
    location: "San Francisco, CA",
    type: "internship",
    remote: true,
    salary: "$7,000 - $9,000/month",
    description:
      "Drive product strategy and work cross-functionally with engineering, design, and data teams to build features that delight users.",
    requirements: ["Business or related field", "Analytical thinking", "Communication skills", "Product sense"],
    benefits: ["Travel credits", "Health benefits", "Flexible work", "Mentorship"],
    postedDate: "5 days ago",
    applicationDeadline: "March 25, 2025",
    matchPercentage: 75,
    companySize: "1,000-5,000 employees",
    industry: "Travel",
    experienceLevel: "entry",
    skills: ["Product Strategy", "Analytics", "Communication", "User Research"],
    saved: true,
    applied: false,
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "Stripe",
    location: "Remote",
    type: "full-time",
    remote: true,
    salary: "$120,000 - $160,000/year",
    description:
      "Build and maintain payment infrastructure that powers millions of businesses worldwide. Work with modern technologies and scale.",
    requirements: ["3+ years experience", "Full stack development", "API design", "Database knowledge"],
    benefits: ["Equity", "Health insurance", "Remote work", "Learning stipend"],
    postedDate: "1 week ago",
    matchPercentage: 70,
    companySize: "1,000-5,000 employees",
    industry: "Fintech",
    experienceLevel: "mid",
    skills: ["Node.js", "React", "PostgreSQL", "API Design"],
    saved: false,
    applied: false,
  },
  {
    id: 6,
    title: "UX Design Intern",
    company: "Spotify",
    location: "New York, NY",
    type: "internship",
    remote: false,
    salary: "$6,500 - $8,500/month",
    description:
      "Design user experiences for music discovery and streaming features. Work with a world-class design team.",
    requirements: ["Design portfolio", "Figma proficiency", "User research experience", "Design thinking"],
    benefits: ["Spotify Premium", "Health benefits", "Design tools", "Concert tickets"],
    postedDate: "4 days ago",
    applicationDeadline: "March 30, 2025",
    matchPercentage: 65,
    companySize: "5,000-10,000 employees",
    industry: "Music",
    experienceLevel: "entry",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    saved: false,
    applied: false,
  },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [jobTypeFilter, setJobTypeFilter] = useState("all")
  const [remoteFilter, setRemoteFilter] = useState("all")
  const [sortBy, setSortBy] = useState("match")
  const [showFilters, setShowFilters] = useState(false)
  const [jobs, setJobs] = useState(mockJobs)

  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.clear()
    window.location.href = "/login"
  }

  const toggleSaveJob = (jobId: number) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, saved: !job.saved } : job)))
  }

  const applyToJob = (jobId: number) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, applied: true } : job)))
  }

  const filteredAndSortedJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
      const matchesJobType = jobTypeFilter === "all" || job.type === jobTypeFilter
      const matchesRemote =
        remoteFilter === "all" ||
        (remoteFilter === "remote" && job.remote) ||
        (remoteFilter === "on-site" && !job.remote)

      return matchesSearch && matchesLocation && matchesJobType && matchesRemote
    })

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "match":
          return b.matchPercentage - a.matchPercentage
        case "date":
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        case "salary":
          // Simple salary comparison (would need more sophisticated parsing in real app)
          return b.salary?.localeCompare(a.salary || "") || 0
        default:
          return 0
      }
    })

    return filtered
  }, [jobs, searchQuery, locationFilter, jobTypeFilter, remoteFilter, sortBy])

  const stats = {
    total: jobs.length,
    internships: jobs.filter((job) => job.type === "internship").length,
    remote: jobs.filter((job) => job.remote).length,
    applied: jobs.filter((job) => job.applied).length,
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
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium relative group flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Jobs
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600" />
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Opportunity</h1>
          <p className="text-muted-foreground">Discover internships and jobs that match your skills and career goals</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Jobs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">{stats.internships}</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.remote}</div>
              <div className="text-sm text-muted-foreground">Remote Jobs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.applied}</div>
              <div className="text-sm text-muted-foreground">Applied</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? "block" : "hidden"} space-y-6`}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type</Label>
                  <Select onValueChange={setJobTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remote">Work Style</Label>
                  <Select onValueChange={setRemoteFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All styles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All styles</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="on-site">On-site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setLocationFilter("")
                    setJobTypeFilter("all")
                    setRemoteFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Sort */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search jobs, companies, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select onValueChange={setSortBy} defaultValue="match">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="match">Best Match</SelectItem>
                        <SelectItem value="date">Most Recent</SelectItem>
                        <SelectItem value="salary">Salary</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden bg-transparent"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredAndSortedJobs.length} of {jobs.length} jobs
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredAndSortedJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-muted-foreground">{job.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          {job.salary && (
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {job.postedDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.companySize}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant={job.type === "internship" ? "default" : "secondary"}>{job.type}</Badge>
                          {job.remote && <Badge variant="outline">Remote</Badge>}
                          <Badge variant="outline" className="text-primary border-primary">
                            {job.matchPercentage}% match
                          </Badge>
                          {job.experienceLevel && <Badge variant="outline">{job.experienceLevel} level</Badge>}
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.slice(0, 4).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{job.skills.length - 4} more
                            </Badge>
                          )}
                        </div>

                        {job.applicationDeadline && (
                          <div className="flex items-center gap-1 text-sm text-orange-600 mb-3">
                            <Clock className="w-4 h-4" />
                            Application deadline: {job.applicationDeadline}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSaveJob(job.id)}
                          className={job.saved ? "text-red-600" : ""}
                        >
                          <Heart className={`w-4 h-4 ${job.saved ? "fill-current" : ""}`} />
                        </Button>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{job.matchPercentage}%</div>
                          <div className="text-xs text-muted-foreground">match</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-muted-foreground">High match for your profile</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        {job.applied ? (
                          <Button disabled size="sm">
                            Applied
                          </Button>
                        ) : (
                          <Button onClick={() => applyToJob(job.id)} size="sm">
                            Apply Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAndSortedJobs.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or filters to find more opportunities.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
