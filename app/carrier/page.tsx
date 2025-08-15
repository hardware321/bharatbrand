import React from 'react'
import MegaDiagnosticsNavbar from '../navbar/navbar'

function page() {
    return (
        <div className="min-h-screen bg-gray-50">
            <MegaDiagnosticsNavbar />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
                    <p className="text-lg text-gray-600">Join our team and grow with us</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Job Position Cards */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Developer</h3>
                        <p className="text-gray-600 mb-4">Full-time position</p>
                        <ul className="text-gray-600 mb-4">
                            <li>• 3+ years of experience</li>
                            <li>• React/Next.js expertise</li>
                            <li>• Team collaboration</li>
                        </ul>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Designer</h3>
                        <p className="text-gray-600 mb-4">Full-time position</p>
                        <ul className="text-gray-600 mb-4">
                            <li>• 2+ years of experience</li>
                            <li>• Figma proficiency</li>
                            <li>• Portfolio required</li>
                        </ul>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Manager</h3>
                        <p className="text-gray-600 mb-4">Full-time position</p>
                        <ul className="text-gray-600 mb-4">
                            <li>• 5+ years of experience</li>
                            <li>• Agile methodology</li>
                            <li>• Leadership skills</li>
                        </ul>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page