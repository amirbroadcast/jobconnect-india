import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Users, BookOpen, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Register Today. Get Connected with Jobs.
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connect with verified employers and training partners. Find your ideal job in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register/job-seeker"
                  className="btn-primary bg-white text-primary hover:bg-gray-100 text-center inline-flex items-center justify-center gap-2"
                >
                  Register Now <ArrowRight size={20} />
                </Link>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Search Jobs
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white opacity-10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold">Your Dream Job Awaits</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Why Choose JobConnect?</h2>
          <p className="section-subtitle text-center">Everything you need to find your perfect job</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: '2-Minute Registration', desc: 'Quick and easy sign-up process' },
              { icon: '🔐', title: 'Verified Employers', desc: 'Connect with trusted companies' },
              { icon: '🎓', title: 'Free Training', desc: 'Upskill with free courses' },
              { icon: '📱', title: 'Mobile First', desc: 'Access anytime, anywhere' },
            ].map((feature, idx) => (
              <div key={idx} className="card">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Main Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Job Seekers */}
            <div className="card border-2 border-primary border-opacity-20 hover:border-opacity-100">
              <Briefcase className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-primary mb-4">For Job Seekers</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Find your dream job from thousands of verified employers across India.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Browse job listings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>AI-powered matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Interview tracking</span>
                </li>
              </ul>
              <Link to="/register/job-seeker" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Employers */}
            <div className="card border-2 border-secondary border-opacity-20 hover:border-opacity-100">
              <Users className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-secondary mb-4">For Employers</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Find talented candidates and build your dream team effortlessly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  <span>Post job openings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  <span>Search verified candidates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  <span>Schedule interviews</span>
                </li>
              </ul>
              <Link to="/register/employer" className="btn-secondary w-full text-center">
                Register Company
              </Link>
            </div>

            {/* Training */}
            <div className="card border-2 border-accent border-opacity-20 hover:border-opacity-100">
              <BookOpen className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-bold text-accent mb-4">Training Programs</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Upskill with free government-backed training and certification courses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Skill training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Certifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-secondary" />
                  <span>Career guidance</span>
                </li>
              </ul>
              <button className="btn-accent w-full text-center bg-accent text-white hover:bg-opacity-90">
                Explore Training
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Jobs Posted</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <p className="text-blue-100">Job Seekers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <p className="text-blue-100">Employers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-blue-100">Placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Ready to Start Your Journey?</h2>
          <p className="section-subtitle">Join thousands of Indians finding jobs on JobConnect India</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/job-seeker" className="btn-primary">
              I'm Looking for a Job
            </Link>
            <Link to="/register/employer" className="btn-secondary">
              I Want to Hire
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
