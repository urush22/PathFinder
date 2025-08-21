"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { PathFinderLogo } from "@/components/pathfinder-logo"
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  LogOut,
  Edit,
  Save,
  Camera,
  Target,
  Calendar,
  Globe,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Software Engineer",
    university: "Stanford University",
    graduationYear: "2025",
    bio: "Passionate software engineer with experience in full-stack development. Looking for internship opportunities in tech companies to grow my skills and contribute to innovative projects.",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"],
    experience: [
      {
        title: "Frontend Developer Intern",
        company: "TechStart Inc",
        duration: "Jun 2024 - Aug 2024",
        description: "Developed responsive web applications using React and TypeScript",
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-stack web application with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/alexjohnson/ecommerce",
      },
    ],
    achievements: [
      "Dean's List - Fall 2023, Spring 2024",
      "Winner - University Hackathon 2024",
      "Google Code-in Finalist 2023",
    ],
    socialLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    },
    profileCompletion: 85,
  })

  const handleLogout = () => {
    // Clear user session/tokens here
    localStorage.removeItem("userToken")
    sessionStorage.clear()

    // Redirect to login page
    router.push("/login")
  }

  const handleSave = () => {
    setIsEditing(false)
    // Save user data to backend here
    console.log("[v0] Profile updated:", user)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl animate-float-slow" />
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <PathFinderLogo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/jobs" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Jobs
            </Link>
            <Link href="/resume-parser" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Resume Parser
            </Link>
            <Link
              href="/interview-practice"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Interview
            </Link>
            <Link href="/profile" className="text-emerald-600 font-medium">
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                My Profile
              </h1>
              <p className="text-gray-600 mt-2">Manage your profile information and career details</p>
            </div>
            <div className="flex items-center gap-3">
              {isEditing ? (
                <Button onClick={handleSave} className="bg-gradient-to-r from-emerald-500 to-green-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          {/* Profile Completion */}
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Profile Completion</h3>
                <span className="text-emerald-600 font-bold">{user.profileCompletion}%</span>
              </div>
              <Progress value={user.profileCompletion} className="mb-2" />
              <p className="text-sm text-gray-600">Complete your profile to increase your visibility to employers</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-600" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {isEditing && (
                      <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={user.name}
                          onChange={(e) => setUser({ ...user, name: e.target.value })}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={user.email}
                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={user.phone}
                          onChange={(e) => setUser({ ...user, phone: e.target.value })}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={user.location}
                          onChange={(e) => setUser({ ...user, location: e.target.value })}
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={user.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1 min-h-[100px]"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Education & Career */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                  Education & Career Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="university">University</Label>
                    <Input
                      id="university"
                      value={user.university}
                      onChange={(e) => setUser({ ...user, university: e.target.value })}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      value={user.graduationYear}
                      onChange={(e) => setUser({ ...user, graduationYear: e.target.value })}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="role">Target Role</Label>
                  <Input
                    id="role"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-600" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="h-6 text-xs bg-transparent">
                      + Add Skill
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/resume-parser">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Target className="w-4 h-4 mr-2" />
                    Upload Resume
                  </Button>
                </Link>
                <Link href="/interview-practice">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Practice Interview
                  </Button>
                </Link>
                <Link href="/jobs">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Browse Jobs
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-gray-600" />
                  <Input
                    value={user.socialLinks.github}
                    disabled={!isEditing}
                    placeholder="GitHub profile"
                    className="text-sm"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <Input
                    value={user.socialLinks.linkedin}
                    disabled={!isEditing}
                    placeholder="LinkedIn profile"
                    className="text-sm"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <Input
                    value={user.socialLinks.twitter}
                    disabled={!isEditing}
                    placeholder="Twitter profile"
                    className="text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {user.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Logout Button */}
            <Card className="bg-white/80 backdrop-blur-sm border-red-100">
              <CardContent className="p-4">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">You'll be redirected to the login page</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
