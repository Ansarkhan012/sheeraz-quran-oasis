
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Calendar, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally be fetched from an API based on the ID
  // For this example, we'll use a hardcoded blog post
  const blogPost = {
    id: id || "sample-post",
    title: id === "tips-for-memorization" 
      ? "10 Proven Tips for Consistent Quran Memorization"
      : id === "tajweed-basics"
      ? "Understanding Tajweed: The Basics Every Student Should Know"
      : id === "importance-of-arabic"
      ? "The Importance of Learning Arabic for Quran Understanding"
      : "Sample Blog Post Title",
    author: "Sheikh Ahmad Al-Farooq",
    date: "May 10, 2025",
    category: "Hifz",
    content: `
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Getting Started with Daily Practice</h2>
      
      <p class="mb-4">Quran memorization requires consistency and dedication. Setting aside a specific time each day for memorization helps establish a routine that becomes second nature. The best times for memorization are typically early morning after Fajr prayer when the mind is fresh, or late evening after Isha prayer when there are fewer distractions.</p>
      
      <p class="mb-4">Here are some practical tips to help you establish an effective memorization routine:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Start with a small portion (1-3 verses) and focus on quality over quantity</li>
        <li>Recite out loud rather than silently to engage more senses in the learning process</li>
        <li>Use a single mushaf (copy of the Quran) for consistency in visual memory</li>
        <li>Understand the meaning of what you're memorizing to create deeper connections</li>
        <li>Review previously memorized portions daily to strengthen retention</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">The Importance of Proper Technique</h2>
      
      <p class="mb-4">Beyond consistency, the technique you use for memorization significantly impacts your success. The method of repetition has been proven effective for Quran memorization for centuries.</p>
      
      <p class="mb-4">One recommended approach is the "5-step repetition method":</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Recite the verse while looking at the mushaf (5 times)</li>
        <li>Close the mushaf and recite from memory (5 times)</li>
        <li>Open the mushaf and check for any mistakes</li>
        <li>Repeat until you can recite without errors</li>
        <li>Connect the new verse with previously memorized verses</li>
      </ol>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Overcoming Common Challenges</h2>
      
      <p class="mb-4">Many students face similar challenges in their Hifz journey. Recognizing these challenges and having strategies to overcome them is essential:</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Challenge 1: Lack of Consistency</h3>
      <p class="mb-4">Inconsistency is the biggest obstacle to successful memorization. Even missing a few days can weaken your retention and require additional time to rebuild momentum.</p>
      
      <p class="mb-4"><strong>Solution:</strong> Create a memorization calendar and track your progress daily. Set realistic goals and hold yourself accountable, perhaps by finding a memorization partner or joining a Hifz group.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Challenge 2: Similar Verses</h3>
      <p class="mb-4">Many verses in the Quran have similar wording but subtle differences, which can cause confusion during memorization.</p>
      
      <p class="mb-4"><strong>Solution:</strong> Create mental notes about the distinguishing features of similar verses. Understanding the context and meaning helps differentiate between them.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Quran memorization is a lifelong journey that requires patience, consistency, and the right techniques. By implementing these proven strategies and remaining steadfast in your practice, you can make significant progress in your Hifz journey.</p>
      
      <p class="mb-4">Remember that the goal isn't just to memorize the words but to develop a deeper connection with the Quran that transforms your understanding and practice of Islam.</p>
    `
  };
  
  // Related posts (would also be fetched in a real implementation)
  const relatedPosts = [
    {
      id: "benefits-of-hifz",
      title: "The Spiritual and Mental Benefits of Quran Memorization",
      category: "Hifz",
      date: "April 1, 2025"
    },
    {
      id: "common-tajweed-mistakes",
      title: "Common Tajweed Mistakes and How to Correct Them",
      category: "Tajweed",
      date: "April 8, 2025"
    },
    {
      id: "online-learning-tips",
      title: "Maximizing Your Online Quran Learning Experience",
      category: "Online Learning",
      date: "March 25, 2025"
    }
  ];
  
  return (
    <Layout>
      <div className="pt-32 bg-pattern-bg">
        <div className="container-custom">
          {/* Back link */}
          <Link to="/blog" className="flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          
          {/* Article Header */}
          <div className="max-w-3xl mx-auto mb-8">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm mb-4">
              {blogPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              {blogPost.title}
            </h1>
            
            {/* Author and Date */}
            <div className="flex flex-wrap items-center text-muted-foreground mb-8">
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{blogPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="w-full h-[400px] bg-secondary mb-8 rounded-lg"></div>
              
              {/* Content */}
              <article className="prose prose-green max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>
              
              {/* Tags */}
              <div className="flex items-center flex-wrap mt-8 pt-6 border-t border-muted">
                <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground mr-2">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    Quran
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    Hifz
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    Memorization
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    Tips
                  </span>
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8">
                <p className="text-muted-foreground mb-2">Share this article:</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-[#1877F2] text-white rounded-full hover:bg-opacity-90">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 bg-[#0077B5] text-white rounded-full hover:bg-opacity-90">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-secondary p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl font-semibold">
                      {blogPost.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{blogPost.author}</h3>
                    <p className="text-muted-foreground">
                      Sheikh Ahmad Al-Farooq is a Hifz and Tajweed specialist with over 15 years of experience teaching Quran memorization to students of all ages. He has memorized the entire Quran and holds an Ijazah in Tajweed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Related Posts */}
              <div className="bg-secondary p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="border-b border-muted pb-4 last:border-b-0 last:pb-0">
                      <Link to={`/blog/${post.id}`} className="block hover:text-primary">
                        <h4 className="font-medium mb-1">{post.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-secondary p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link to="/blog?category=Hifz" className="flex items-center justify-between p-2 hover:bg-white/50 rounded">
                    <span>Hifz</span>
                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">8</span>
                  </Link>
                  <Link to="/blog?category=Tajweed" className="flex items-center justify-between p-2 hover:bg-white/50 rounded">
                    <span>Tajweed</span>
                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">5</span>
                  </Link>
                  <Link to="/blog?category=Arabic" className="flex items-center justify-between p-2 hover:bg-white/50 rounded">
                    <span>Arabic</span>
                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span>
                  </Link>
                  <Link to="/blog?category=Tafseer" className="flex items-center justify-between p-2 hover:bg-white/50 rounded">
                    <span>Tafseer</span>
                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                  </Link>
                  <Link to="/blog?category=Children" className="flex items-center justify-between p-2 hover:bg-white/50 rounded">
                    <span>Children</span>
                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                  </Link>
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Start Learning Today</h3>
                <p className="mb-4 opacity-90">
                  Join thousands of students learning Quran online with our qualified tutors.
                </p>
                <Link to="/pricing" className="btn w-full py-2 bg-white text-primary hover:bg-white/90">
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
