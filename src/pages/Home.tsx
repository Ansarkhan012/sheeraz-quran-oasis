
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, Award, FileText, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import TestimonialCard from '../components/common/TestimonialCard';
import TutorCard from '../components/common/TutorCard';

const Home = () => {
  // Sample data
  const featuredTutors = [
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
    }
  ];
  
  const testimonials = [
    {
      name: "Abdullah Ahmed",
      role: "Hifz Student",
      quote: "I started my Hifz journey with Al Sheeraz Academy and the structured approach helped me memorize the Quran much faster than I expected. The tutors are highly qualified and patient.",
      rating: 5
    },
    {
      name: "Aisha Khan",
      role: "Parent",
      quote: "My children have been learning with Al Sheeraz for over two years now. The flexible timings and personalized attention have made a huge difference in their Quranic education.",
      rating: 5
    },
    {
      name: "Yusuf Ibrahim",
      role: "Tajweed Student",
      quote: "The Tajweed course here is exceptional. The teacher identified my specific pronunciation issues and provided targeted exercises that quickly improved my recitation.",
      rating: 4
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center islamic-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
              Excellence in Quranic Education
            </h1>
            <p className="text-lg md:text-xl mb-8 text-foreground/90">
              Learn Quran online with qualified tutors through personalized, interactive lessons designed for all ages and levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learning-path" className="btn btn-primary px-8 py-3 text-lg">
                Get Started
              </Link>
              <Link to="/about" className="btn btn-outline px-8 py-3 text-lg">
                Learn More
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-muted grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="font-heading text-3xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Active Students</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground">Qualified Tutors</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">5</p>
                <p className="text-muted-foreground">Specialized Courses</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">24/7</p>
                <p className="text-muted-foreground">Global Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="About Al Sheeraz Quran Academy"
                subtitle="Dedicated to providing high-quality Quranic education worldwide through qualified tutors and structured curriculum."
              />
              <p className="mb-6 text-foreground/90">
                Al Sheeraz Quran Academy was established with the mission to make authentic Quranic education accessible to Muslims around the world. Our online platform connects students with qualified tutors who provide personalized instruction in Quran recitation, memorization, and understanding.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Qualified Tutors</h3>
                    <p className="text-sm text-muted-foreground">All tutors have Ijazah and proper certification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">Choose times that work best for you</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">One-on-One Learning</h3>
                    <p className="text-sm text-muted-foreground">Personalized attention for better progress</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Certified Courses</h3>
                    <p className="text-sm text-muted-foreground">Recognized curriculum and certification</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary px-6 py-2">
                Learn More About Us
              </Link>
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
      
      {/* Courses Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <SectionTitle 
            title="Our Learning Paths"
            subtitle="Structured courses designed to help you progress in your Quranic journey step by step."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-muted text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Noorani Qaida & Nazra</h3>
              <p className="text-muted-foreground mb-6">
                Learn the basics of Arabic letters and proper pronunciation to begin your Quran reading journey.
              </p>
              <Link to="/learning-path" className="btn btn-primary px-6 py-2">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-muted text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tajweed & Qirat</h3>
              <p className="text-muted-foreground mb-6">
                Master the rules of proper Quranic recitation with beautiful intonation and correct pronunciation.
              </p>
              <Link to="/learning-path" className="btn btn-primary px-6 py-2">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-muted text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hifz & Tafseer</h3>
              <p className="text-muted-foreground mb-6">
                Memorize the Quran and understand its meanings and interpretations from qualified scholars.
              </p>
              <Link to="/learning-path" className="btn btn-primary px-6 py-2">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/learning-path" className="btn btn-outline px-8 py-3">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Tutors Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Featured Tutors"
            subtitle="Learn from experienced and qualified tutors dedicated to helping you succeed in your Quranic journey."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTutors.map((tutor, index) => (
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
          
          <div className="mt-12 text-center">
            <Link to="/tutors" className="btn btn-primary px-8 py-3">
              Meet All Our Tutors
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section islamic-pattern">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Students Say"
            subtitle="Hear from our students about their learning experience with Al Sheeraz Quran Academy."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Quranic Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students who are learning the Quran online with Al Sheeraz Quran Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learning-path" className="btn px-8 py-3 bg-white text-primary hover:bg-white/90">
              View Our Courses
            </Link>
            <Link to="/pricing" className="btn px-8 py-3 bg-transparent border border-white hover:bg-white/10">
              See Pricing Plans
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionTitle 
              title="Latest Articles"
              subtitle="Tips, guides, and insights to enhance your Quranic learning."
              className="mb-0"
            />
            <Link to="/blog" className="btn btn-outline mt-4 md:mt-0">
              View All Articles
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-muted">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Tips for Consistent Quran Memorization
                </h3>
                <p className="text-muted-foreground mb-4">
                  Practical strategies to help you establish a consistent Hifz routine and memorize the Quran more effectively.
                </p>
                <Link 
                  to="/blog/tips-for-memorization" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-muted">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Understanding Tajweed: The Basics
                </h3>
                <p className="text-muted-foreground mb-4">
                  An introduction to the fundamental rules of Tajweed and why they're essential for proper Quranic recitation.
                </p>
                <Link 
                  to="/blog/tajweed-basics" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-muted">
              <div className="h-48 bg-secondary"></div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  The Importance of Learning Arabic
                </h3>
                <p className="text-muted-foreground mb-4">
                  Exploring how understanding Arabic enhances your connection with the Quran and deepens your comprehension.
                </p>
                <Link 
                  to="/blog/importance-of-arabic" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
