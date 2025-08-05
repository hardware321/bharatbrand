import React from 'react'
import { 
  Stethoscope,

} from 'lucide-react';

function intervantionalRadiology() {
  return (
    <div>      {/* Interventional Radiology */}
      <section id='Minimally-Invasive-Treatments' className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interventional Radiology</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Where Precision Meets Procedure - Advanced minimally invasive treatments under real-time image guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">First in Southern Rajasthan</h3>
                <p className="text-purple-100">Leading provider of interventional radiology services with state-of-the-art equipment.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">IPD Facilities Available</h3>
                <p className="text-purple-100">Complete inpatient care for procedure-based patients with expert nursing and anesthesia care.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Advanced Equipment</h3>
                <p className="text-purple-100">Well-equipped OT with advance semi Cath-Lab machine, equipped with ventilator & emergency procedures.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-8 rounded-2xl">
                <Stethoscope className="h-24 w-24 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">Minimally Invasive</h3>
                <p className="text-purple-200">Faster recovery, reduced risk, no major surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default intervantionalRadiology