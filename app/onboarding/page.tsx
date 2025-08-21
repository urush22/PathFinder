"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PathFinderLogo } from "@/components/pathfinder-logo"
import { MapPin, Code, Trophy, Plus, X, ArrowRight, ArrowLeft } from "lucide-react"

const STEPS = [
  { id: 1, title: "Basic Info", description: "Tell us about yourself" },
  { id: 2, title: "Career Goals", description: "What are you looking for?" },
  { id: 3, title: "Skills & Experience", description: "Showcase your abilities" },
  { id: 4, title: "Projects & Achievements", description: "Highlight your work" },
]

const ROLES = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Product Manager",
  "UI/UX Designer",
  "DevOps Engineer",
  "Mobile Developer",
  "Machine Learning Engineer",
  "Cybersecurity Analyst",
  "Business Analyst",
]

const SKILL_CATEGORIES = {
  "Programming Languages": ["JavaScript", "Python", "Java", "C++", "TypeScript", "Go", "Rust", "Swift"],
  Frontend: ["React", "Vue.js", "Angular", "HTML/CSS", "Tailwind CSS", "Next.js", "Svelte"],
  Backend: ["Node.js", "Express", "Django", "Flask", "Spring Boot", "FastAPI", "Ruby on Rails"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  "Tools & Others": ["Git", "Figma", "Jira", "Postman", "VS Code", "Linux", "Agile"],
}

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    location: "",
    university: "",
    graduationYear: "",
    bio: "",

    // Career Goals
    targetRole: "",
    preferredLocations: [] as string[],
    jobType: "",
    salaryExpectation: "",

    // Skills
    skills: [] as string[],
    experience: "",

    // Projects & Achievements
    projects: [{ name: "", description: "", technologies: "", link: "" }],
    achievements: [""],
  })

  const [newSkill, setNewSkill] = useState("")
  const [newLocation, setNewLocation] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData((prev) => ({ ...prev, skills: [...prev.skills, skill] }))
    }
    setNewSkill("")
  }

  const removeSkill = (skill: string) => {
    setFormData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }))
  }

  const addLocation = () => {
    if (newLocation && !formData.preferredLocations.includes(newLocation)) {
      setFormData((prev) => ({ ...prev, preferredLocations: [...prev.preferredLocations, newLocation] }))
      setNewLocation("")
    }
  }

  const removeLocation = (location: string) => {
    setFormData((prev) => ({ ...prev, preferredLocations: prev.preferredLocations.filter((l) => l !== location) }))
  }

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "", technologies: "", link: "" }],
    }))
  }

  const updateProject = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((project, i) => (i === index ? { ...project, [field]: value } : project)),
    }))
  }

  const removeProject = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }))
  }

  const addAchievement = () => {
    setFormData((prev) => ({ ...prev, achievements: [...prev.achievements, ""] }))
  }

  const updateAchievement = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      achievements: prev.achievements.map((achievement, i) => (i === index ? value : achievement)),
    }))
  }

  const removeAchievement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index),
    }))
  }

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // TODO: Save profile data
    console.log("Profile data:", formData)
    router.push("/dashboard")
  }

  const progress = (currentStep / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <PathFinderLogo size="lg" />
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Step {currentStep} of {STEPS.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{STEPS[currentStep - 1].title}</CardTitle>
            <CardDescription>{STEPS[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Current Location</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="university">University/College</Label>
                    <Input
                      id="university"
                      placeholder="Your institution"
                      value={formData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Select onValueChange={(value) => handleInputChange("graduationYear", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio (Optional)</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us a bit about yourself..."
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Career Goals */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="targetRole">Target Role</Label>
                  <Select onValueChange={(value) => handleInputChange("targetRole", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your target role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Work Locations</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a location"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addLocation()}
                    />
                    <Button type="button" onClick={addLocation} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.preferredLocations.map((location) => (
                      <Badge key={location} variant="secondary" className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {location}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => removeLocation(location)} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobType">Job Type</Label>
                    <Select onValueChange={(value) => handleInputChange("jobType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salaryExpectation">Salary Expectation (Optional)</Label>
                    <Input
                      id="salaryExpectation"
                      placeholder="e.g., $50,000 - $70,000"
                      value={formData.salaryExpectation}
                      onChange={(e) => handleInputChange("salaryExpectation", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Skills & Experience */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addSkill(newSkill)}
                    />
                    <Button type="button" onClick={() => addSkill(newSkill)} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Skill Categories */}
                  <div className="space-y-3">
                    {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
                      <div key={category}>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant={formData.skills.includes(skill) ? "default" : "outline"}
                              className="cursor-pointer"
                              onClick={() => (formData.skills.includes(skill) ? removeSkill(skill) : addSkill(skill))}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Selected Skills */}
                  {formData.skills.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Your Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill) => (
                          <Badge key={skill} className="flex items-center gap-1">
                            <Code className="w-3 h-3" />
                            {skill}
                            <X className="w-3 h-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Projects & Achievements */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Projects</Label>
                    <Button type="button" onClick={addProject} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-1" /> Add Project
                    </Button>
                  </div>

                  {formData.projects.map((project, index) => (
                    <Card key={index} className="p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Project {index + 1}</h4>
                          {formData.projects.length > 1 && (
                            <Button type="button" onClick={() => removeProject(index)} size="sm" variant="ghost">
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input
                            placeholder="Project name"
                            value={project.name}
                            onChange={(e) => updateProject(index, "name", e.target.value)}
                          />
                          <Input
                            placeholder="Project link (optional)"
                            value={project.link}
                            onChange={(e) => updateProject(index, "link", e.target.value)}
                          />
                        </div>

                        <Textarea
                          placeholder="Project description"
                          value={project.description}
                          onChange={(e) => updateProject(index, "description", e.target.value)}
                          rows={2}
                        />

                        <Input
                          placeholder="Technologies used (e.g., React, Node.js, MongoDB)"
                          value={project.technologies}
                          onChange={(e) => updateProject(index, "technologies", e.target.value)}
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Achievements</Label>
                    <Button type="button" onClick={addAchievement} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-1" /> Add Achievement
                    </Button>
                  </div>

                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex-1">
                        <Input
                          placeholder="Describe your achievement"
                          value={achievement}
                          onChange={(e) => updateAchievement(index, e.target.value)}
                        />
                      </div>
                      {formData.achievements.length > 1 && (
                        <Button type="button" onClick={() => removeAchievement(index)} size="sm" variant="ghost">
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < STEPS.length ? (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="button" onClick={handleSubmit}>
                  Complete Profile
                  <Trophy className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
