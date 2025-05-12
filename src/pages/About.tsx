
import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { BookOpen, Award, Users, GraduationCap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: "Excellence in Teaching",
      description: "We maintain high standards in our teaching methodology and selection of tutors to deliver the best Quranic education."
    },
    {
      title: "Personalized Attention",
      description: "We recognize that each student has unique learning needs and provide personalized attention to ensure their success."
    },
    {
      title: "Ethical Conduct",
      description: "We adhere to Islamic ethics in all our interactions and ensure a respectful, supportive learning environment."
    },
    {
      title: "Continuous Improvement",
      description: "We continuously strive to improve our curriculum, teaching methods, and technology to enhance the learning experience."
    }
  ];
  
  return (
    <Layout>
      <PageHeader 
        title="About Al Sheeraz"
        subtitle="Our mission, vision, and the dedicated team behind Al Sheeraz Quran Academy."
      />
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story"
                subtitle="The journey of Al Sheeraz Quran Academy from inception to becoming a trusted name in Quranic education."
              />
              
              <div className="space-y-4">
                <p className="text-foreground/90">
                  Al Sheeraz Quran Academy was founded in 2010 by a group of Islamic scholars who recognized the need for accessible, high-quality Quranic education in the modern world. What began as a small local initiative in Islamabad, Pakistan, has grown into an international online academy serving thousands of students across the globe.
                </p>
                <p className="text-foreground/90">
                  Our founders believed that learning the Quran should not be limited by geographical boundaries or time constraints. With this vision, we pioneered a comprehensive online learning system that maintains the traditional teacher-student relationship while utilizing modern technology to enhance accessibility and effectiveness.
                </p>
                <p className="text-foreground/90">
                  Over the years, we have refined our curriculum, expanded our teaching faculty, and continuously improved our learning platform to provide an exceptional educational experience for students of all ages and backgrounds.
                </p>
              </div>
              
              <div className="mt-8 flex items-center">
                <img 
                  src="https://via.placeholder.com/80" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Sheikh Mohammed Al-Sheeraz</p>
                  <p className="text-sm text-muted-foreground">Founder & Director</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md bg-secondary h-48"></div>
                <div className="rounded-lg overflow-hidden shadow-md bg-secondary h-64"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden shadow-md bg-secondary h-64"></div>
                <div className="rounded-lg overflow-hidden shadow-md bg-secondary h-48"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              
              <p className="mb-6 text-foreground/90">
                To provide accessible, high-quality Quranic education that nurtures a deep connection with the Quran and empowers students to implement its teachings in their daily lives.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Make Quranic education accessible to all, regardless of location or schedule</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Maintain the highest standards in teaching methodology and tutor selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Foster a supportive learning environment that encourages continuous progress</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Integrate traditional teaching methods with modern educational technology</span>
                </li>
              </ul>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              
              <p className="mb-6 text-foreground/90">
                To become the global leader in online Quranic education, known for excellence, innovation, and producing students who embody Quranic values in their character and actions.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Reach students in every corner of the world with quality Quranic education</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Pioneer innovative teaching methods that enhance learning outcomes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Develop comprehensive educational resources for all levels of Quranic study</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>Build a global community of Quran learners who support and inspire each other</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide our approach to teaching and operations."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 border border-muted rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section islamic-pattern">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Al Sheeraz"
            subtitle="What sets us apart from other online Quranic education providers."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Qualified Tutors</h3>
              <p className="text-center text-muted-foreground">
                All our tutors have formal Ijazah certification and undergo rigorous selection and training to ensure teaching excellence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Structured Curriculum</h3>
              <p className="text-center text-muted-foreground">
                Our progressive curriculum is designed by scholars to ensure systematic learning from basics to advanced levels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Personalized Approach</h3>
              <p className="text-center text-muted-foreground">
                We customize the learning experience based on individual needs, learning styles, and goals for optimal progress.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="p-3 bg-primary/10 rounded-full text-primary mr-4 mt-1">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Classes available 24/7 to accommodate different time zones and busy schedules.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="p-3 bg-primary/10 rounded-full text-primary mr-4 mt-1">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Interactive Technology</h3>
                <p className="text-muted-foreground">
                  Advanced learning platform with interactive tools to enhance the online learning experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="p-3 bg-primary/10 rounded-full text-primary mr-4 mt-1">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Detailed progress reports and regular assessments to monitor and enhance student development.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="p-3 bg-primary/10 rounded-full text-primary mr-4 mt-1">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Global Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow students worldwide through community forums and virtual events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Approvals */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Certifications & Approvals"
            subtitle="Al Sheeraz Quran Academy is recognized and certified by leading Islamic educational institutions."
            alignment="center"
          />
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="p-6 border border-muted rounded-lg text-center w-40 h-32 flex items-center justify-center">
              <div>
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="font-medium">Certification 1</p>
              </div>
            </div>
            
            <div className="p-6 border border-muted rounded-lg text-center w-40 h-32 flex items-center justify-center">
              <div>
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="font-medium">Certification 2</p>
              </div>
            </div>
            
            <div className="p-6 border border-muted rounded-lg text-center w-40 h-32 flex items-center justify-center">
              <div>
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="font-medium">Certification 3</p>
              </div>
            </div>
            
            <div className="p-6 border border-muted rounded-lg text-center w-40 h-32 flex items-center justify-center">
              <div>
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="font-medium">Certification 4</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Summary */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <SectionTitle 
            title="Our Leadership Team"
            subtitle="Meet the dedicated individuals who guide Al Sheeraz Quran Academy."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">Sheikh Mohammed Al-Sheeraz</h3>
                <p className="text-sm text-muted-foreground mb-2">Founder & Director</p>
                <p className="text-sm">30+ years of experience in Islamic education and Quranic studies.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">Dr. Aisha Rahman</h3>
                <p className="text-sm text-muted-foreground mb-2">Academic Director</p>
                <p className="text-sm">PhD in Islamic Studies with specialization in Quranic Sciences.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">Ustadh Abdul Kareem</h3>
                <p className="text-sm text-muted-foreground mb-2">Lead Instructor</p>
                <p className="text-sm">Hafiz with Ijazah in 10 Qirat and 20 years of teaching experience.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">Hafiza Maryam Siddiqui</h3>
                <p className="text-sm text-muted-foreground mb-2">Female Students Coordinator</p>
                <p className="text-sm">Expert in teaching Tajweed and Hifz to female students globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Begin Your Quranic Journey With Us
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our academy and experience the difference of learning with dedicated, qualified tutors in a structured, supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learning-path" className="btn px-8 py-3 bg-white text-primary hover:bg-white/90">
              Explore Courses
            </Link>
            <Link to="/pricing" className="btn px-8 py-3 bg-transparent border border-white hover:bg-white/10">
              See Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
