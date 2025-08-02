export const ComponentCategories = {
  "Hero Sections": ["heroGradient", "heroMinimal", "heroImage"],
  "About Sections": ["aboutImageText", "aboutStats", "aboutTeam"],
  "Footer Sections": ["footerSimple", "footerNewsletter", "footerSocial"],
  "Basic Components": ["cardSimple", "ctaSection", "featureHighlight"],
}

export const ComponentLibrary = {
  // Hero Sections (existing)
  heroGradient: `
    <section class="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden" data-component="hero">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span data-text-id="title">Build Amazing</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400" data-text-id="subtitle">
              Websites
            </span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4" data-text-id="description">
            Create stunning, responsive websites with our modern drag-and-drop builder. No coding required.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a href="#" class="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block text-center" data-button-id="primary">
              Get Started Free
            </a>
            <a href="#" class="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-colors inline-block text-center" data-button-id="secondary">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  `,

  heroMinimal: `
    <section class="bg-white py-16 sm:py-20 lg:py-32" data-component="hero">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
            <span data-text-id="title1">Simple.</span>
            <span class="block font-bold" data-text-id="title2">Powerful.</span>
            <span class="block text-gray-500" data-text-id="title3">Beautiful.</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" data-text-id="description">
            Experience the perfect balance of simplicity and functionality with our minimalist approach to web design.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <a href="#" class="w-full sm:w-auto bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-none font-medium text-base sm:text-lg hover:bg-gray-800 transition-colors inline-block text-center" data-button-id="primary">
              Explore
            </a>
            <a href="#" class="w-full sm:w-auto text-gray-600 hover:text-black transition-colors font-medium text-base sm:text-lg inline-block text-center" data-button-id="secondary">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  heroImage: `
    <section class="relative bg-gray-900 text-white" data-component="hero">
      <div class="absolute inset-0">
        <img src="/placeholder.svg?height=800&width=1200" 
             alt="Hero Background" 
             class="w-full h-full object-cover opacity-40" />
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div class="max-w-3xl">
          <div class="flex items-center space-x-2 mb-4 sm:mb-6">
            <i class="fas fa-rocket text-blue-400 text-xl sm:text-2xl"></i>
            <span class="text-blue-400 font-semibold text-base sm:text-lg" data-text-id="badge">Innovation Starts Here</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span data-text-id="title">Transform Your Digital Presence</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed" data-text-id="description">
            Join thousands of businesses who trust our platform to create exceptional digital experiences that drive growth and engagement.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#" class="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center" data-button-id="primary">
              <i class="fas fa-play mr-2"></i>
              Start Building
            </a>
            <a href="#" class="w-full sm:w-auto border border-gray-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center" data-button-id="secondary">
              <i class="fas fa-info-circle mr-2"></i>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  // About Sections
  aboutImageText: `
    <section class="py-16 lg:py-24 bg-white" data-component="about">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/placeholder.svg?height=600&width=800" 
                 alt="About Us" 
                 class="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-text-id="title">
              About Our Company
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed" data-text-id="description">
              We are a passionate team of innovators dedicated to creating exceptional digital experiences. With over a decade of expertise, we help businesses transform their online presence.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed" data-text-id="subdescription">
              Our mission is to empower companies with cutting-edge technology and creative solutions that drive growth and success in the digital landscape.
            </p>
            <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  aboutStats: `
    <section class="py-16 lg:py-24 bg-gray-50" data-component="about">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-text-id="title">
            Our Impact in Numbers
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-text-id="description">
            We're proud of what we've accomplished and the trust our clients place in us.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2" data-text-id="stat1">
              500+
            </div>
            <p class="text-lg text-gray-600" data-text-id="stat1label">
              Projects Completed
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2" data-text-id="stat2">
              50+
            </div>
            <p class="text-lg text-gray-600" data-text-id="stat2label">
              Happy Clients
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-purple-600 mb-2" data-text-id="stat3">
              10+
            </div>
            <p class="text-lg text-gray-600" data-text-id="stat3label">
              Years Experience
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-orange-600 mb-2" data-text-id="stat4">
              24/7
            </div>
            <p class="text-lg text-gray-600" data-text-id="stat4label">
              Support Available
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  `,

  aboutTeam: `
    <section class="py-16 lg:py-24 bg-white" data-component="about">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-text-id="title">
            Meet Our Team
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-text-id="description">
            Our diverse team of experts brings together creativity, technical expertise, and passion for innovation.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <img src="/placeholder.svg?height=300&width=300" 
                 alt="Team Member" 
                 class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-900 mb-2" data-text-id="member1name">
              Sarah Johnson
            </h3>
            <p class="text-blue-600 font-medium mb-3" data-text-id="member1role">
              CEO & Founder
            </p>
            <p class="text-gray-600" data-text-id="member1bio">
              Visionary leader with 15+ years in tech innovation and business strategy.
            </p>
          </div>
          <div class="text-center">
            <img src="/placeholder.svg?height=300&width=300" 
                 alt="Team Member" 
                 class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-900 mb-2" data-text-id="member2name">
              Michael Chen
            </h3>
            <p class="text-blue-600 font-medium mb-3" data-text-id="member2role">
              CTO
            </p>
            <p class="text-gray-600" data-text-id="member2bio">
              Technical architect passionate about scalable solutions and emerging technologies.
            </p>
          </div>
          <div class="text-center">
            <img src="/placeholder.svg?height=300&width=300" 
                 alt="Team Member" 
                 class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-900 mb-2" data-text-id="member3name">
              Emily Rodriguez
            </h3>
            <p class="text-blue-600 font-medium mb-3" data-text-id="member3role">
              Lead Designer
            </p>
            <p class="text-gray-600" data-text-id="member3bio">
              Creative designer focused on user experience and beautiful, functional interfaces.
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="primary">
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  `,

  // Footer Sections
  footerSimple: `
    <footer class="bg-gray-900 text-white py-12" data-component="footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4" data-text-id="brandname">
              Your Brand
            </h3>
            <p class="text-gray-300 mb-4" data-text-id="description">
              Creating exceptional digital experiences that drive growth and innovation for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4" data-text-id="links1title">
              Quick Links
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link1">Home</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link2">About</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link3">Services</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link4">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4" data-text-id="links2title">
              Support
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link5">Help Center</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link6">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link7">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-300" data-text-id="copyright">
            © 2025 Your Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,

  footerNewsletter: `
    <footer class="bg-gray-800 text-white py-16" data-component="footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl font-bold mb-4" data-text-id="title">
              Stay Updated
            </h3>
            <p class="text-xl text-gray-300 mb-6" data-text-id="description">
              Subscribe to our newsletter and get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center" data-button-id="primary">
                Subscribe
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold mb-4" data-text-id="links1title">
                Company
              </h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link1">About Us</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link2">Careers</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link3">Press</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link4">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4" data-text-id="links2title">
                Resources
              </h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link5">Documentation</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link6">Help Center</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link7">Community</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link8">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
          <p class="text-gray-300" data-text-id="copyright">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,

  footerSocial: `
    <footer class="bg-black text-white py-16" data-component="footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold mb-4" data-text-id="brandname">
            Your Brand
          </h3>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8" data-text-id="description">
            Connect with us on social media and stay updated with our latest news and updates.
          </p>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-pink-400 transition-colors">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-blue-600 transition-colors">
              <i class="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-red-500 transition-colors">
              <i class="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 class="text-lg font-semibold mb-4" data-text-id="contact1title">
              Contact Info
            </h4>
            <p class="text-gray-300 mb-2" data-text-id="email">
              hello@yourbrand.com
            </p>
            <p class="text-gray-300 mb-2" data-text-id="phone">
              +1 (555) 123-4567
            </p>
            <p class="text-gray-300" data-text-id="address">
              123 Business St, City, State 12345
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4" data-text-id="links1title">
              Quick Links
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link1">Home</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link2">About</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link3">Services</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link4">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4" data-text-id="links2title">
              Legal
            </h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link5">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link6">Terms of Service</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors" data-text-id="link7">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-300 mb-4 md:mb-0" data-text-id="copyright">
            © 2025 Your Brand. All rights reserved.
          </p>
          <a href="#" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="primary">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  `,

  // Basic Components
  cardSimple: `
    <section class="py-16 bg-gray-50" data-component="card">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-star text-blue-600 text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4" data-text-id="title">
              Premium Service
            </h3>
            <p class="text-lg text-gray-600 mb-6" data-text-id="description">
              Experience our top-tier service designed to exceed your expectations and deliver exceptional results for your business.
            </p>
            <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  ctaSection: `
    <section class="py-16 bg-blue-600 text-white" data-component="cta">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" data-text-id="title">
          Ready to Get Started?
        </h2>
        <p class="text-xl mb-8 opacity-90" data-text-id="description">
          Join thousands of satisfied customers who have transformed their business with our solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" data-button-id="primary">
            Start Free Trial
          </a>
          <a href="#" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block" data-button-id="secondary">
            Contact Sales
          </a>
        </div>
        <p class="text-sm mt-4 opacity-75" data-text-id="note">
          No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  `,

  featureHighlight: `
    <section class="py-16 bg-white" data-component="feature">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-text-id="title">
            Why Choose Us?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-text-id="description">
            We provide exceptional value through innovative solutions and dedicated support.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-rocket text-green-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3" data-text-id="feature1title">
              Fast & Reliable
            </h3>
            <p class="text-gray-600" data-text-id="feature1desc">
              Lightning-fast performance with 99.9% uptime guarantee for your peace of mind.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-shield-alt text-purple-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3" data-text-id="feature2title">
              Secure & Safe
            </h3>
            <p class="text-gray-600" data-text-id="feature2desc">
              Enterprise-grade security with advanced encryption to protect your valuable data.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-headset text-orange-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3" data-text-id="feature3title">
              24/7 Support
            </h3>
            <p class="text-gray-600" data-text-id="feature3desc">
              Round-the-clock expert support to help you succeed every step of the way.
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  `,
}
