"use client";
import React, { useState, useEffect, ReactNode } from 'react';
import { 
  Microscope, 
  FlaskConical, 
  Dna, 
  Heart, 
  Shield, 
  CheckCircle,
  Activity,
  Scan,
  Brain,
} from 'lucide-react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tests: string[];
  category: string;
}

const radiologyServices: Service[] = [
  {
    icon: Scan,
    title: 'Digital X-Ray',
    description: 'Fast, high-resolution digital scans with instant results',
    tests: ['Chest X-Ray', 'Bone X-Ray', 'Joint X-Ray', 'Spine X-Ray'],
    category: 'imaging'
  },
  {
    icon: Heart,
    title: 'CT Scan',
    description: 'Multi-slice CT-Scan for all body parts with specialized protocols',
    tests: ['CT Angiographies', 'Triple-phase CT (Liver)', 'CT-Adrenal protocol', 'Enteroclysis'],
    category: 'imaging'
  },
  {
    icon: Brain,
    title: 'MRI',
    description: '3D Digital Silent MRI for brain, spine, joint, and abdominal scans',
    tests: ['Brain MRI', 'Spine MRI', 'Joint MRI', 'Abdominal MRI'],
    category: 'imaging'
  },
  {
    icon: Heart,
    title: 'Ultrasound & Doppler',
    description: '2D, 3D, 4D scans for all organs with advanced Doppler studies',
    tests: ['Abdominal USG', 'Pelvic USG', 'Doppler Studies', 'Echocardiography'],
    category: 'imaging'
  },
  {
    icon: Activity,
    title: 'Antenatal Services',
    description: 'Comprehensive fetal scans including 3D, 4D, and anomaly scans',
    tests: ['3D/4D Scans', 'Anomaly Scan', 'Fetal Echo', 'NBNT'],
    category: 'imaging'
  },
  {
    icon: Heart,
    title: 'Mammography',
    description: 'Advanced breast imaging and cancer screening',
    tests: ['Digital Mammography', 'Breast Cancer Screening', 'Tomosynthesis'],
    category: 'imaging'
  }
];

const pathologyServices: Service[] = [
  {
    icon: FlaskConical,
    title: 'Clinical Biochemistry',
    description: 'Comprehensive blood chemistry analysis with 5-part hematology',
    tests: ['Liver Profile', 'Kidney Profile', 'Lipid Profile', 'Thyroid Profile'],
    category: 'pathology'
  },
  {
    icon: Shield,
    title: 'Immunology & Serology',
    description: 'Advanced testing for infections and immune system disorders',
    tests: ['Dengue Testing', 'HIV Testing', 'Hepatitis Panel', 'COVID Testing'],
    category: 'pathology'
  },
  {
    icon: Microscope,
    title: 'Histopathology',
    description: 'In-house tissue evaluation with tumor markers',
    tests: ['Biopsy Examination', 'Cancer Screening', 'Tumor Markers', 'Special Stains'],
    category: 'pathology'
  },
  {
    icon: Dna,
    title: 'Cytology',
    description: 'Cell-based diagnostic testing including FNACs and Pap smears',
    tests: ['FNAC', 'Pap Smear', 'Body Fluids', 'Cervical Screening'],
    category: 'pathology'
  },
  {
    icon: Activity,
    title: 'Microbiology',
    description: 'Cultures, sensitivity testing, and infection diagnosis',
    tests: ['Culture & Sensitivity', 'Blood Culture', 'Urine Culture', 'TB Testing'],
    category: 'pathology'
  },
  {
    icon: FlaskConical,
    title: 'Clinical Pathology',
    description: 'Routine analysis of urine, stool, and body fluids',
    tests: ['Urine Analysis', 'Stool Examination', 'Body Fluid Analysis', 'Semen Analysis'],
    category: 'pathology'
  }
];

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`rounded-2xl border border-blue-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-bold leading-none tracking-tight text-blue-900 ${className}`} {...props}>
    {children}
  </h3>
);

function MedicalServices() {
  const [activeTab, setActiveTab] = useState<'pathology' | 'radiology'>('pathology');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Simulate scroll-based animations by making elements visible after mount
    const timer = setTimeout(() => {
      const newVisible: Record<string, boolean> = {};
      newVisible['header'] = true;
      
      const services = activeTab === 'pathology' ? pathologyServices : radiologyServices;
      services.forEach((_, index) => {
        setTimeout(() => {
          setIsVisible(prev => ({
            ...prev,
            [`service-${index}`]: true
          }));
        }, index * 100);
      });
      
      setIsVisible(prev => ({ ...prev, ...newVisible }));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentServices = activeTab === 'pathology' ? pathologyServices : radiologyServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible['header'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Medical Diagnostic Services
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Rajasthan's first fully digital, automated, and barcoded diagnostic laboratory ensuring speed, accuracy, and reliability with state-of-the-art equipment and expert medical professionals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('pathology')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'pathology'
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-blue-500 hover:bg-blue-50'
              }`}
            >
              <FlaskConical className="inline-block w-5 h-5 mr-2" />
              Pathology Services
            </button>
            <button
              onClick={() => setActiveTab('radiology')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'radiology'
                  ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                  : 'text-purple-500 hover:bg-purple-50'
              }`}
            >
              <Scan className="inline-block w-5 h-5 mr-2" />
              Radiology Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <Card 
              key={`${activeTab}-${index}`}
              className={`hover:shadow-2xl transition-all duration-500 ${
                activeTab === 'pathology' ? 'border-blue-100' : 'border-purple-100'
              } ${
                isVisible[`service-${index}`] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`${
                  activeTab === 'pathology' 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                    : 'bg-gradient-to-r from-purple-400 to-purple-500'
                } text-white p-4 rounded-xl w-fit mb-4 transform transition-transform duration-300 hover:scale-110 shadow-lg`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className={`${
                  activeTab === 'pathology' ? 'text-blue-900' : 'text-purple-900'
                } text-2xl`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  <h4 className={`font-semibold ${
                    activeTab === 'pathology' ? 'text-blue-800' : 'text-purple-800'
                  } text-sm uppercase tracking-wide`}>
                    Key Tests Available:
                  </h4>
                  <ul className="space-y-2">
                    {service.tests.slice(0, 3).map((test, testIndex) => (
                      <li key={testIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className={`h-4 w-4 ${
                          activeTab === 'pathology' ? 'text-blue-500' : 'text-purple-500'
                        } mr-3 flex-shrink-0`} />
                        <span className="font-medium">{test}</span>
                      </li>
                    ))}
                    {service.tests.length > 3 && (
                      <li className={`text-sm ${
                        activeTab === 'pathology' ? 'text-blue-600' : 'text-purple-600'
                      } font-semibold ml-7`}>
                        +{service.tests.length - 3} more specialized tests
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

 
      </div>
    </div>
  );
}

export default MedicalServices;