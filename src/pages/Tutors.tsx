
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import TutorCard from '../components/common/TutorCard';
import { Search, ChevronDown } from 'lucide-react';

const Tutors = () => {
  // Sample tutors data
  const allTutors = [
    {
      name: "Sheikh Ahmad Al-Farooq",
      specialization: "Hifz & Tajweed Specialist",
      experience: "15+ years",
      subjects: ["Hifz", "Tajweed", "Qirat"],
      bio: "Sheikh Ahmad has memorized the entire Quran and specializes in teaching proper Tajweed rules and Hifz to students of all ages."
    },
    {
      name: "Ustadh Ibrahim Malik",
      specialization: "Tafseer Expert",
      experience: "12 years",
      subjects: ["Tafseer", "Arabic", "Islamic Studies"],
      bio: "Ustadh Ibrahim has studied Tafseer under renowned scholars and specializes in explaining the meanings of the Quran in a contemporary context."
    },
    {
      name: "Qari Mohammed Abdul Rahman",
      specialization: "Qirat & Noorani Qaida",
      experience: "10+ years",
      subjects: ["Noorani Qaida", "Nazra", "Basic Arabic"],
      bio: "Qari Mohammed focuses on teaching beginners the proper pronunciation and recitation of the Quran through the Noorani Qaida method."
    },
    {
      name: "Ustadha Khadija Omar",
      specialization: "Women's Quran Teacher",
      experience: "8 years",
      subjects: ["Nazra", "Tajweed", "Islamic Studies for Women"],
      bio: "Ustadha Khadija specializes in teaching female students in a comfortable and supportive environment, focusing on proper recitation and understanding."
    },
    {
      name: "Sheikh Yusuf Al-Azhari",
      specialization: "Arabic Language Expert",
      experience: "14 years",
      subjects: ["Arabic Grammar", "Quran Translation", "Tafseer"],
      bio: "Sheikh Yusuf has a deep understanding of Arabic linguistics and helps students understand the Quran through proper language comprehension."
    },
    {
      name: "Hafiz Abdul Samad",
      specialization: "Hifz Specialist",
      experience: "20+ years",
      subjects: ["Hifz", "Revision Techniques", "Memorization"],
      bio: "Hafiz Abdul Samad has helped hundreds of students complete their Hifz and has developed effective memorization techniques for all age groups."
    },
    {
      name: "Qaria Fatima Ahmed",
      specialization: "Female Qirat Expert",
      experience: "9 years",
      subjects: ["Female Qirat", "Tajweed", "Voice Training"],
      bio: "Qaria Fatima specializes in teaching proper Quranic recitation with beautiful voice modulation for female students."
    },
    {
      name: "Maulana Bilal Khan",
      specialization: "Children's Quran Teacher",
      experience: "7 years",
      subjects: ["Noorani Qaida", "Basic Quran", "Islamic Studies for Children"],
      bio: "Maulana Bilal has a special approach to teaching children with engaging methods that make learning the Quran enjoyable and effective."
    },
    {
      name: "Dr. Hamza Al-Makki",
      specialization: "Quran and Science Expert",
      experience: "16 years",
      subjects: ["Quran & Science", "Advanced Tafseer", "Research"],
      bio: "Dr. Hamza specializes in exploring the scientific miracles in the Quran and teaches advanced Tafseer with a modern perspective."
    }
  ];
  
  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  
  // Get unique subjects for filter dropdown
  const allSubjects = ['All', ...new Set(allTutors.flatMap(tutor => tutor.subjects))];
  
  // Filter tutors based on search and subject filter
  const filteredTutors = allTutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tutor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tutor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = selectedSubject === 'All' || tutor.subjects.includes(selectedSubject);
    
    return matchesSearch && matchesSubject;
  });
  
  return (
    <Layout>
      <PageHeader 
        title="Our Qualified Tutors"
        subtitle="Meet our team of dedicated and experienced Quran teachers committed to your learning journey."
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          {/* Filter and Search */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search tutors by name or specialization..."
                className="w-full pl-10 pr-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-1/4 relative">
              <select
                className="w-full appearance-none pl-4 pr-10 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {allSubjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredTutors.length} of {allTutors.length} tutors
            </p>
          </div>
          
          {/* Tutors Grid */}
          {filteredTutors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutors.map((tutor, index) => (
                <TutorCard 
                  key={index}
                  name={tutor.name}
                  specialization={tutor.specialization}
                  experience={tutor.experience}
                  subjects={tutor.subjects}
                  bio={tutor.bio}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No tutors found matching your criteria.</p>
              <button 
                className="mt-4 btn btn-outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSubject('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Want to Find the Perfect Tutor?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us for personalized tutor matching based on your specific learning needs and schedule.
          </p>
          <button className="btn px-8 py-3 bg-white text-primary hover:bg-white/90">
            Request Tutor Matching
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Tutors;
