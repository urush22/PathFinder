import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PathFinderLogo } from "@/components/pathfinder-logo"
import {
  ArrowRight,
  Users,
  FileText,
  MessageSquare,
  Target,
  Star,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Sparkles,
  Rocket,
  Globe,
  Award,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-full blur-lg animate-pulse" />

        {/* Floating Icons */}
        <Sparkles className="absolute top-32 right-1/4 w-6 h-6 text-emerald-400/60 animate-twinkle" />
        <Rocket className="absolute bottom-1/3 right-20 w-8 h-8 text-green-400/50 animate-bounce-slow" />
        <Globe className="absolute top-1/2 left-20 w-7 h-7 text-teal-400/50 animate-spin-slow" />
        <Award className="absolute bottom-20 left-1/3 w-6 h-6 text-yellow-500/60 animate-pulse" />
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <PathFinderLogo />
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#success-stories"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group"
            >
              Success Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-emerald-50 hover:text-emerald-700 transition-all">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center relative">
        {/* Floating elements around hero */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full animate-bounce-slow" />

        <Badge
          variant="secondary"
          className="mb-8 text-s5m px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 border-emerald-200 hover:scale-105 transition-transform"
        >
          <Star className="w-4 h-4 mr-2 text-yellow-500" />
          Trusted by 10,000+ Students Worldwide
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight animate-fade-in">
          Your Career Journey
          <br />
          <span className="relative">
            Starts Here
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-expand" />
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
          PathFinder is the complete platform for students to discover internships, improve resumes with AI, practice
          interviews, and land their dream jobs. Stop worrying about your future – start building it.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link href="/signup">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group"
            >
              Start Your Journey Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all bg-transparent"
            >
              See How It Works
            </Button>
          </Link>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-12 text-gray-600">
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-medium">Free to Start</span>
          </div>
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium">Secure & Private</span>
          </div>
          <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="font-medium">AI-Powered</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white/60 backdrop-blur-sm py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              How PathFinder Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to transform your career prospects and land your dream opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: 1,
                title: "Create Your Profile",
                desc: "Sign up and complete your profile with skills, projects, and career goals",
                color: "from-emerald-500 to-green-500",
              },
              {
                num: 2,
                title: "Optimize Your Resume",
                desc: "Upload your resume and get AI-powered feedback to improve your chances",
                color: "from-green-500 to-teal-500",
              },
              {
                num: 3,
                title: "Practice Interviews",
                desc: "Prepare with company-specific mock interviews powered by AI",
                color: "from-teal-500 to-blue-500",
              },
              {
                num: 4,
                title: "Apply & Get Hired",
                desc: "Discover matched opportunities and apply with confidence",
                color: "from-blue-500 to-indigo-500",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transform group-hover:rotate-3 transition-all`}
                >
                  <span className="text-3xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and guidance you need for your career journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Briefcase,
              title: "Smart Job Matching",
              desc: "Get personalized internship and job recommendations based on your skills, location, and career goals with AI-powered matching.",
              color: "emerald",
              gradient: "from-emerald-500 to-green-500",
              href:"/job-matching"
            },
            {
              icon: FileText,
              title: "AI Resume Parser",
              desc: "Upload your resume and get instant feedback with section-wise analysis, ATS optimization, and personalized improvement suggestions.",
              color: "green",
              gradient: "from-green-500 to-teal-500",
              href:"/resume-parser"
            },
            {
              icon: MessageSquare,
              title: "Mock Interviews",
              desc: "Practice with our AI interviewer that asks company and role-specific questions to prepare you for real interviews.",
              color: "teal",
              gradient: "from-teal-500 to-blue-500",
              href:"/interview-practice"
            },
            {
              icon: Users,
              title: "Profile Builder",
              desc: "Create a comprehensive profile showcasing your skills, projects, and achievements to stand out to employers.",
              color: "blue",
              gradient: "from-blue-500 to-indigo-500",
              href:"/profile-builder"
            },
            {
              icon: Target,
              title: "Career Guidance",
              desc: "Get personalized recommendations on which roles and companies align with your career aspirations and skills.",
              color: "indigo",
              gradient: "from-indigo-500 to-purple-500",
              href:"/career-guidance"
            },
            {
              icon: TrendingUp,
              title: "Success Tracking",
              desc: "Monitor your application progress, interview performance, and get insights on how to improve your success rate.",
              color: "purple",
              gradient: "from-purple-500 to-pink-500",
              href:"/success-tracking"
            },
          ].map((feature, index) => (
            <Link key={index} href={feature.href}>
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`} />
              <CardHeader className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4 text-gray-800">{feature.title}</CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how PathFinder has helped students land their dream internships and jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">SJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CS Student, Stanford</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  "PathFinder's resume parser helped me improve my resume score from 65 to 92. I landed a Google
                  internship within 2 weeks of using the platform!"
                </CardDescription>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Engineering Student, MIT</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  "The AI interview practice was a game-changer. I practiced Meta-specific questions and aced my real
                  interview. Now I'm a Software Engineer Intern there!"
                </CardDescription>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Aisha Lee</h4>
                    <p className="text-sm text-muted-foreground">Business Student, UC Berkeley</p>
                  </div>
                </div>
                <CardDescription className="text-base">
                  "PathFinder's job matching algorithm found me the perfect Product Manager internship at Airbnb. The
                  95% match was spot on!"
                </CardDescription>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10,000+", label: "Students Helped", color: "emerald" },
            { value: "85%", label: "Success Rate", color: "green" },
            { value: "500+", label: "Partner Companies", color: "teal" },
            { value: "24/7", label: "AI Support", color: "blue" },
          ].map((stat, index) => (
            <div key={index} className="group hover:scale-110 transition-all duration-300">
              <div className={`text-5xl font-bold text-${stat.color}-600 mb-3 group-hover:animate-pulse`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you're ready. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-4xl font-bold text-primary my-4">$0</div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Basic job search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Resume upload</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Profile creation</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full">Get Started Free</Button>
                </Link>
              </div>
            </Card>

            <Card className="bg-background border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-4xl font-bold text-primary my-4">$19</div>
                <CardDescription>Everything you need to succeed</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>AI Resume Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Unlimited Mock Interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full">Start Pro Trial</Button>
                </Link>
              </div>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-primary my-4">Custom</div>
                <CardDescription>For universities and organizations</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career Journey?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of students who have found their dream internships and jobs with PathFinder. Your future starts
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Journey Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/jobs">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Browse Opportunities
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-gray-50 to-emerald-50 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <PathFinderLogo className="mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Empowering students to find their path to success through AI-powered career tools.
              </p>
              <div className="flex gap-4">
                {/* Social media icons with hover effects */}
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-emerald-600 font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-blue-600 font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-purple-600 font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/jobs" className="hover:text-emerald-600">
                    Job Search
                  </Link>
                </li>
                <li>
                  <Link href="/resume-parser" className="hover:text-emerald-600">
                    Resume Parser
                  </Link>
                </li>
                <li>
                  <Link href="/interview-practice" className="hover:text-emerald-600">
                    Interview Practice
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-emerald-600">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-emerald-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-emerald-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-emerald-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-emerald-600">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/help" className="hover:text-emerald-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-emerald-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-emerald-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-emerald-600">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-100 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 PathFinder. All rights reserved. Empowering students to find their path to success.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
