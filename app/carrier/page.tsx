'use client';
import MegaDiagnosticsNavbar from '../navbar/navbar';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Heart, 
  Target,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Stethoscope,
  Activity,
  Star,
  Phone,
  Mail,
  Microscope,
  Zap,
  UserCheck,
  HeartHandshake,
  Calendar,
  Building2,
  Sparkles,
  GraduationCap,
  TrendingUp,
  Coffee,
  Gift,
  Briefcase,
  Send,
  FileText,
  DollarSign,
  PlusCircle,
  ArrowRight,
  ChevronRight,
  Globe,
  BookOpen,
  Car,
  Home
} from 'lucide-react';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateX(0) scale(1)';
            element.classList.add('animate-visible');
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};

const MegaCareers = () => {
  const [selectedJob, setSelectedJob] = useState<{
    id: number;
    title: string;
    department: string;
    type: string;
    experience: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
  } | null>(null);
  useScrollAnimation();

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages',
      icon: DollarSign
    },
    {
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and family',
      icon: Shield
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning and career advancement opportunities',
      icon: TrendingUp
    },
    {
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling',
      icon: Clock
    },
    {
      title: 'Training Programs',
      description: 'Regular skill development and certification programs',
      icon: GraduationCap
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities and celebrations',
      icon: Users
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Radiologist',
      department: 'Radiology',
      type: 'Full-time',
      experience: '5-8 Years',
      location: 'Udaipur, Rajasthan',
      salary: '₹15-25 LPA',
      description: 'We are seeking an experienced Radiologist to join our team. The candidate will be responsible for interpreting medical images, providing accurate diagnoses, and collaborating with other healthcare professionals.',
      requirements: [
        'MD in Radiodiagnosis from recognized institution',
        'Valid medical license and registration',
        '5+ years of experience in diagnostic radiology',
        'Expertise in CT, MRI, Ultrasound, and X-ray interpretation',
        'Strong communication and interpersonal skills'
      ],
      responsibilities: [
        'Interpret diagnostic imaging studies including CT, MRI, Ultrasound',
        'Provide accurate and timely radiology reports',
        'Collaborate with referring physicians',
        'Participate in multidisciplinary team meetings',
        'Ensure quality control and safety protocols'
      ]
    },
    {
      id: 2,
      title: 'Clinical Pathologist',
      department: 'Pathology',
      type: 'Full-time',
      experience: '3-6 Years',
      location: 'Udaipur, Rajasthan',
      salary: '₹12-20 LPA',
      description: 'Join our pathology team to provide accurate laboratory diagnoses and contribute to patient care through precise testing and analysis.',
      requirements: [
        'MD in Pathology from recognized medical college',
        'Valid medical license',
        'Experience in clinical and anatomical pathology',
        'Knowledge of laboratory management systems',
        'Attention to detail and analytical skills'
      ],
      responsibilities: [
        'Perform microscopic examination of tissue samples',
        'Oversee laboratory operations and quality control',
        'Interpret laboratory test results',
        'Collaborate with clinical team for patient diagnosis',
        'Ensure compliance with laboratory standards'
      ]
    },
    {
      id: 3,
      title: 'Radiology Technician',
      department: 'Radiology',
      type: 'Full-time',
      experience: '2-4 Years',
      location: 'Udaipur, Rajasthan',
      salary: '₹3-6 LPA',
      description: 'We need skilled Radiology Technicians to operate imaging equipment and assist in providing quality diagnostic services.',
      requirements: [
        'Diploma/Certificate in Radiology Technology',
        'Valid technician license',
        'Experience with CT, MRI, X-ray equipment',
        'Knowledge of radiation safety protocols',
        'Good communication skills'
      ],
      responsibilities: [
        'Operate radiological equipment safely and efficiently',
        'Prepare patients for imaging procedures',
        'Maintain equipment and ensure quality control',
        'Follow radiation safety protocols',
        'Assist radiologists during procedures'
      ]
    },
    {
      id: 4,
      title: 'Lab Technologist',
      department: 'Laboratory',
      type: 'Full-time',
      experience: '1-3 Years',
      location: 'Udaipur, Rajasthan',
      salary: '₹2.5-4.5 LPA',
      description: 'Looking for dedicated Lab Technologists to perform various laboratory tests and maintain high standards of accuracy.',
      requirements: [
        'BSc in Medical Laboratory Technology',
        'Knowledge of laboratory procedures and equipment',
        'Experience in clinical laboratory testing',
        'Attention to detail and accuracy',
        'Computer literacy'
      ],
      responsibilities: [
        'Perform routine and specialized laboratory tests',
        'Maintain laboratory equipment and instruments',
        'Follow quality control procedures',
        'Prepare and analyze samples',
        'Document and report test results accurately'
      ]
    },
    {
      id: 5,
      title: 'Patient Care Coordinator',
      department: 'Administration',
      type: 'Full-time',
      experience: '1-2 Years',
      location: 'Udaipur, Rajasthan',
      salary: '₹2-3.5 LPA',
      description: 'Join our patient care team to ensure excellent patient experience and coordinate various healthcare services.',
      requirements: [
        'Graduate in any discipline',
        'Excellent communication skills in Hindi and English',
        'Basic computer knowledge',
        'Customer service experience preferred',
        'Empathetic and patient-oriented approach'
      ],
      responsibilities: [
        'Coordinate patient appointments and scheduling',
        'Provide information about services and procedures',
        'Handle patient inquiries and concerns',
        'Maintain patient records and documentation',
        'Ensure smooth patient flow and experience'
      ]
    },
    {
      id: 6,
      title: 'Biomedical Engineer',
      department: 'Technical',
      type: 'Full-time',
      experience: '2-5 Years',
      location: 'Udaipur, Rajasthan',
      salary: '₹4-8 LPA',
      description: 'We need a skilled Biomedical Engineer to maintain and service our advanced medical equipment.',
      requirements: [
        'BE/BTech in Biomedical Engineering',
        'Experience in medical equipment maintenance',
        'Knowledge of CT, MRI, Ultrasound systems',
        'Problem-solving and analytical skills',
        'Willingness to work in shifts'
      ],
      responsibilities: [
        'Maintain and service medical imaging equipment',
        'Troubleshoot technical issues',
        'Ensure equipment compliance and safety',
        'Coordinate with vendors for repairs',
        'Train staff on equipment operation'
      ]
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Innovation & Technology',
      description: 'Work with cutting-edge medical technology and contribute to healthcare innovation',
      icon: Zap
    },
    {
      title: 'Professional Excellence',
      description: 'Be part of a team that maintains highest standards of medical practice',
      icon: Star
    },
    {
      title: 'Patient Impact',
      description: 'Make a direct difference in patient lives through accurate diagnostics',
      icon: Heart
    },
    {
      title: 'Growth Opportunities',
      description: 'Advance your career with continuous learning and development programs',
      icon: TrendingUp
    },
    {
      title: 'Collaborative Environment',
      description: 'Work alongside experienced professionals from top medical institutes',
      icon: Users
    },
    {
      title: 'Work-Life Balance',
      description: 'Enjoy flexible schedules and supportive work environment',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
        <MegaDiagnosticsNavbar/>
      <style jsx>{`
        .scroll-animate {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-[100px] md:py-[140px] bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 text-white/10 animate-bounce">
          <Briefcase className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div className="absolute top-20 right-8 md:top-32 md:right-16 text-white/10 animate-pulse">
          <Users className="h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="absolute bottom-10 left-8 md:bottom-20 md:left-20 text-white/10 animate-bounce" style={{animationDelay: '1s'}}>
          <GraduationCap className="h-8 w-8 md:h-10 md:w-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full">
                <Briefcase className="h-5 w-5 md:h-8 md:w-8 text-purple-900" />
              </div>
              <h1 className="text-xl md:text-5xl font-bold">Join Our Team</h1>
            </div>
            <p className="text-base md:text-xl max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
              Be part of Rajasthan's premier diagnostic center and contribute to advancing healthcare 
              with cutting-edge technology and compassionate patient care.
            </p>
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 md:px-8 py-2 md:py-3 rounded-full text-purple-900 font-bold text-sm md:text-lg shadow-lg">
              <Sparkles className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
              BUILD YOUR CAREER WITH MEGA
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Why Work With Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about healthcare innovation and patient care excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {whyWorkWithUs.map((reason, index) => (
              <Card key={index} className="p-4 md:p-6 shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white/80 backdrop-blur-sm" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-5 w-5 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center">{reason.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Employee Benefits & Perks
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 md:p-6 shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white hover:shadow-xl" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: `${index * 75}ms` }}>
                <CardContent className="p-0 text-center">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-purple-900 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-5 w-5 md:h-7 md:w-7" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Current Job Openings</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Explore exciting career opportunities in healthcare and diagnostics
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={job.id} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 scroll-animate bg-gradient-to-br from-white to-gray-50" style={{ opacity: 0, transform: 'translateY(20px)', transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => setSelectedJob(job)}
                      className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                        {req.split(' ').slice(0, 3).join(' ')}...
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">How to Apply</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our team? Follow these simple steps to apply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 text-center shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: '100ms' }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Position</h3>
                <p className="text-gray-600">Browse through our current job openings and select the position that matches your skills and interests.</p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 text-center shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: '200ms' }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
                <p className="text-gray-600">Send your resume and cover letter to our HR department or apply directly through our online portal.</p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 text-center shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: '300ms' }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Process</h3>
                <p className="text-gray-600">Our HR team will review your application and schedule interviews with shortlisted candidates.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-purple-600 to-purple-800 text-white max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="mb-6 text-lg">Send your resume and cover letter to our HR department</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span className="text-lg">careers@megadiagnostics.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-lg">+91 294 XXX XXXX</span>
                  </div>
                </div>
                <Button className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Detail Modal
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedJob.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>
                <Button 
                  onClick={() => setSelectedJob(null)}
                  variant="outline"
                  className="px-6"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MegaCareers;