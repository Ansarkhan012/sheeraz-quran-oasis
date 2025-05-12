
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import BlogCard from '../components/common/BlogCard';
import { Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: "tips-for-memorization",
      title: "10 Proven Tips for Consistent Quran Memorization",
      excerpt: "Practical strategies to help you establish a consistent Hifz routine and memorize the Quran more effectively.",
      date: "May 10, 2025",
      category: "Hifz"
    },
    {
      id: "tajweed-basics",
      title: "Understanding Tajweed: The Basics Every Student Should Know",
      excerpt: "An introduction to the fundamental rules of Tajweed and why they're essential for proper Quranic recitation.",
      date: "May 5, 2025",
      category: "Tajweed"
    },
    {
      id: "importance-of-arabic",
      title: "The Importance of Learning Arabic for Quran Understanding",
      excerpt: "Exploring how understanding Arabic enhances your connection with the Quran and deepens your comprehension.",
      date: "April 28, 2025",
      category: "Arabic"
    },
    {
      id: "children-quran-learning",
      title: "How to Motivate Children to Learn the Quran",
      excerpt: "Effective approaches and activities to keep children engaged and excited about Quranic studies.",
      date: "April 20, 2025",
      category: "Children"
    },
    {
      id: "ramadan-preparation",
      title: "Preparing for Ramadan: Quran Reading Schedule",
      excerpt: "A practical guide to planning your Quran reading during Ramadan to complete the entire Quran.",
      date: "April 15, 2025",
      category: "Ramadan"
    },
    {
      id: "common-tajweed-mistakes",
      title: "Common Tajweed Mistakes and How to Correct Them",
      excerpt: "Identifying and fixing the most frequent errors made in Quranic recitation to improve your reading.",
      date: "April 8, 2025",
      category: "Tajweed"
    },
    {
      id: "benefits-of-hifz",
      title: "The Spiritual and Mental Benefits of Quran Memorization",
      excerpt: "Exploring how memorizing the Quran impacts your spiritual growth, memory, and cognitive abilities.",
      date: "April 1, 2025",
      category: "Hifz"
    },
    {
      id: "online-learning-tips",
      title: "Maximizing Your Online Quran Learning Experience",
      excerpt: "Tips and techniques to get the most out of online Quran classes and self-study sessions.",
      date: "March 25, 2025",
      category: "Online Learning"
    },
    {
      id: "tafseer-importance",
      title: "Why Tafseer is Essential for Complete Quranic Understanding",
      excerpt: "Understanding the importance of learning the interpretation and context of Quranic verses.",
      date: "March 20, 2025",
      category: "Tafseer"
    }
  ];
  
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter blog posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <PageHeader 
        title="Blog & Articles"
        subtitle="Tips, guides, and insights to enhance your Quranic learning."
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          {/* Filter and Search */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-1/3 flex space-x-2 overflow-x-auto pb-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedCategory === category 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">No articles found matching your search criteria.</p>
              <button 
                className="mt-4 btn btn-outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section islamic-pattern">
        <div className="container-custom">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground">
                Get the latest articles, tips, and resources delivered directly to your inbox.
              </p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow py-3 px-4 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn btn-primary py-3 px-6">
                Subscribe
              </button>
            </form>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
