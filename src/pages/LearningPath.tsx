
import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import CourseCard from '../components/common/CourseCard';
import { BookOpen, Type, BookCopy, FileText, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningPath = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Learning Path"
        subtitle="Structured courses designed to help you progress in your Quranic journey step by step."
        background="islamic"
      />
      
      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">Begin Your Quranic Journey</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Al Sheeraz Quran Academy offers a structured learning path that guides students from the basics of reading the Quran to advanced studies in memorization and interpretation. Our curriculum is designed to be progressive, allowing students to build upon their knowledge at each stage.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-primary"></div>
            </div>
          </div>
          
          {/* Path Overview */}
          <div className="mt-16">
            <div className="relative">
              {/* Path Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Path Steps */}
              <div className="space-y-24">
                {/* Step 1 */}
                <div className="relative">
                  <div className="md:absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10">
                    1
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold text-primary mb-2">Noorani Qaida</h3>
                      <p className="text-muted-foreground">
                        The foundation of Quranic learning. Master the Arabic alphabet, pronunciation, and basic reading rules.
                      </p>
                    </div>
                    <div className="md:pl-8">
                      <div className="bg-secondary p-6 rounded-lg shadow-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Introduction to Arabic alphabet
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Basic pronunciation and letter forms
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Connecting letters and forming words
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Introduction to diacritical marks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="md:absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10">
                    2
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    <div className="md:text-right md:pr-8 order-1 md:order-none mb-4 md:mb-0">
                      <div className="bg-secondary p-6 rounded-lg shadow-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Reading short surahs with guidance
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Improving recitation fluency
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Building reading stamina
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Introduction to basic Tajweed rules
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:pl-8">
                      <h3 className="text-2xl font-semibold text-primary mb-2">Nazra (Reading)</h3>
                      <p className="text-muted-foreground">
                        Progress to reading the Quran with proper pronunciation, focusing on accuracy and fluency.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="md:absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10">
                    3
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold text-primary mb-2">Tajweed</h3>
                      <p className="text-muted-foreground">
                        Learn the rules of proper Quranic recitation, including pronunciation, intonation, and rhythm.
                      </p>
                    </div>
                    <div className="md:pl-8">
                      <div className="bg-secondary p-6 rounded-lg shadow-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Detailed Tajweed rules and application
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Proper pronunciation of Arabic sounds
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Rules of stopping and continuing
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Beautiful recitation techniques
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative">
                  <div className="md:absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10">
                    4
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    <div className="md:text-right md:pr-8 order-1 md:order-none mb-4 md:mb-0">
                      <div className="bg-secondary p-6 rounded-lg shadow-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Structured memorization techniques
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Daily assignments and revision
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Memory strengthening exercises
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Regular recitation practice
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:pl-8">
                      <h3 className="text-2xl font-semibold text-primary mb-2">Hifz (Memorization)</h3>
                      <p className="text-muted-foreground">
                        Memorize the Quran partially or completely using proven techniques under expert guidance.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative">
                  <div className="md:absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10">
                    5
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold text-primary mb-2">Tafseer</h3>
                      <p className="text-muted-foreground">
                        Study the interpretation and meaning of the Quran to understand its message deeply.
                      </p>
                    </div>
                    <div className="md:pl-8">
                      <div className="bg-secondary p-6 rounded-lg shadow-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Understanding Quranic context
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Word-by-word translation
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Historical background of revelations
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Contemporary applications of Quranic teachings
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Courses */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <SectionTitle 
            title="Our Courses"
            subtitle="Detailed information about each course offered at Al Sheeraz Quran Academy."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard 
              title="Noorani Qaida"
              description="Master the basics of Arabic letters, pronunciation, and reading fundamentals. Ideal for absolute beginners."
              level="Beginner"
              duration="3-6 months"
              icon={<Type className="h-6 w-6" />}
            />
            
            <CourseCard 
              title="Nazra (Quran Reading)"
              description="Learn to read the Quran with proper pronunciation and flow, building confidence and accuracy."
              level="Beginner to Intermediate"
              duration="6-12 months"
              icon={<BookOpen className="h-6 w-6" />}
            />
            
            <CourseCard 
              title="Tajweed Rules"
              description="Master the rules of correct Quranic recitation, including proper articulation points and qualities of letters."
              level="Intermediate"
              duration="6-8 months"
              icon={<BookCopy className="h-6 w-6" />}
            />
            
            <CourseCard 
              title="Hifz (Memorization)"
              description="Structured program to memorize parts or the entire Quran with regular revision and review."
              level="Intermediate to Advanced"
              duration="2-5 years (full Quran)"
              icon={<BookText className="h-6 w-6" />}
            />
            
            <CourseCard 
              title="Tafseer (Interpretation)"
              description="Understand the meaning and context of Quranic verses with explanations from authentic sources."
              level="Intermediate to Advanced"
              duration="Ongoing"
              icon={<FileText className="h-6 w-6" />}
            />
            
            <CourseCard 
              title="Arabic for Quran"
              description="Learn essential Arabic grammar and vocabulary specifically for understanding the Quran."
              level="All Levels"
              duration="8-12 months"
              icon={<Type className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Common questions about our learning paths and courses."
            alignment="center"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How do I know which course is right for me?</h3>
                <p className="text-muted-foreground">
                  We conduct an assessment for each new student to determine their current level and learning goals. Based on this, we recommend the most appropriate course to begin with.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I join multiple courses simultaneously?</h3>
                <p className="text-muted-foreground">
                  While it's possible, we generally recommend focusing on one course at a time, especially for beginners. This allows for better concentration and progress. However, advanced students may take complementary courses together.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How long does it take to complete each course?</h3>
                <p className="text-muted-foreground">
                  Course duration varies depending on individual progress, prior knowledge, and time commitment. Noorani Qaida typically takes 3-6 months, Tajweed 6-8 months, and Hifz can range from 2-5 years for complete Quran memorization.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Do you offer certificates upon completion?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide certificates for all completed courses. For Hifz, we also conduct a formal Ijazah ceremony for those who complete the memorization of the entire Quran.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I switch tutors during my course?</h3>
                <p className="text-muted-foreground">
                  Yes, if you feel you need a different teaching style or approach, we're happy to arrange for a different tutor. Our goal is to ensure you have the best learning experience possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Enroll today and take the first step towards mastering the Quran with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="btn px-8 py-3 bg-white text-primary hover:bg-white/90">
              See Pricing Plans
            </Link>
            <Link to="/contact" className="btn px-8 py-3 bg-transparent border border-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LearningPath;
