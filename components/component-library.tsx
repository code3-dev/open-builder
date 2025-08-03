export const ComponentCategories = {
  Navigation: ["navbarModern", "navbarMinimal", "navbarCentered", "navbarSidebar"],
  "Hero Sections": ["heroGradient", "heroMinimal", "heroImage"],
  "About Sections": ["aboutImageText", "aboutStats", "aboutTeam"],
  "Footer Sections": ["footerSimple", "footerNewsletter", "footerSocial"],
  "Basic Components": [
    "cardSimple",
    "ctaSection",
    "featureHighlight",
    "testimonialCard",
    "pricingCard",
    "contactForm",
    "imageGallery",
    "videoSection",
    "faqSection",
    "blogCard",
    "statsCounter",
  ],
}

export const ComponentLibrary = {
  // Navigation Components
  navbarModern: `
  <nav class="bg-white shadow-lg sticky top-0 z-50" data-component="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i class="fas fa-bolt text-white text-sm"></i>
              </div>
              <span class="text-xl font-bold text-gray-900" data-text-id="brand">Brand</span>
            </div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" data-text-id="nav1">Home</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" data-text-id="nav2">About</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" data-text-id="nav3">Services</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" data-text-id="nav4">Portfolio</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" data-text-id="nav5">Contact</a>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="#" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" data-button-id="cta">Get Started</a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button type="button" class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2" onclick="toggleMobileMenu()">
            <i class="fas fa-bars text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a href="#" class="text-gray-900 block px-3 py-2 text-base font-medium" data-text-id="nav1">Home</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium" data-text-id="nav2">About</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium" data-text-id="nav3">Services</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium" data-text-id="nav4">Portfolio</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium" data-text-id="nav5">Contact</a>
          <div class="pt-4">
            <a href="#" class="bg-blue-600 text-white block px-3 py-2 rounded-lg font-semibold text-center" data-button-id="cta">Get Started</a>
          </div>
        </div>
      </div>
    </div>

    <script>
      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
      }
    </script>
  </nav>
`,

  navbarMinimal: `
  <nav class="bg-white border-b border-gray-100 sticky top-0 z-50" data-component="navbar">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-2xl font-light text-gray-900" data-text-id="brand">Minimal</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-12">
          <a href="#" class="text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors" data-text-id="nav1">Work</a>
          <a href="#" class="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors" data-text-id="nav2">About</a>
          <a href="#" class="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors" data-text-id="nav3">Services</a>
          <a href="#" class="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors" data-text-id="nav4">Journal</a>
        </div>

        <!-- Contact Link -->
        <div class="hidden md:block">
          <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" data-button-id="contact">Contact</a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button type="button" class="text-gray-600 hover:text-gray-900 p-2" onclick="toggleMinimalMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden hidden" id="minimal-mobile-menu">
        <div class="px-4 pt-2 pb-6 space-y-4 bg-white border-t border-gray-100">
          <a href="#" class="block text-gray-900 text-lg font-medium py-2" data-text-id="nav1">Work</a>
          <a href="#" class="block text-gray-600 text-lg font-medium py-2 hover:text-gray-900" data-text-id="nav2">About</a>
          <a href="#" class="block text-gray-600 text-lg font-medium py-2 hover:text-gray-900" data-text-id="nav3">Services</a>
          <a href="#" class="block text-gray-600 text-lg font-medium py-2 hover:text-gray-900" data-text-id="nav4">Journal</a>
          <div class="pt-4 border-t border-gray-100">
            <a href="#" class="block text-gray-900 text-lg font-medium py-2" data-button-id="contact">Contact</a>
          </div>
        </div>
      </div>
    </div>

    <script>
      function toggleMinimalMenu() {
        const menu = document.getElementById('minimal-mobile-menu');
        menu.classList.toggle('hidden');
      }
    </script>
  </nav>
`,

  navbarCentered: `
  <nav class="bg-white shadow-sm sticky top-0 z-50" data-component="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18 py-4">
        <!-- Left Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors" data-text-id="nav1">Products</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors" data-text-id="nav2">Solutions</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors" data-text-id="nav3">Resources</a>
        </div>

        <!-- Centered Logo -->
        <div class="flex items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <i class="fas fa-gem text-white"></i>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-text-id="brand">Centered</span>
          </div>
        </div>

        <!-- Right Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors" data-text-id="nav4">Pricing</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors" data-text-id="nav5">About</a>
          <a href="#" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all" data-button-id="cta">Sign Up</a>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button type="button" class="text-gray-600 hover:text-gray-900 p-2" onclick="toggleCenteredMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="lg:hidden hidden" id="centered-mobile-menu">
        <div class="px-4 pt-2 pb-6 space-y-3 bg-white border-t border-gray-200">
          <a href="#" class="block text-gray-700 text-base font-medium py-2 hover:text-blue-600" data-text-id="nav1">Products</a>
          <a href="#" class="block text-gray-700 text-base font-medium py-2 hover:text-blue-600" data-text-id="nav2">Solutions</a>
          <a href="#" class="block text-gray-700 text-base font-medium py-2 hover:text-blue-600" data-text-id="nav3">Resources</a>
          <a href="#" class="block text-gray-700 text-base font-medium py-2 hover:text-blue-600" data-text-id="nav4">Pricing</a>
          <a href="#" class="block text-gray-700 text-base font-medium py-2 hover:text-blue-600" data-text-id="nav5">About</a>
          <div class="pt-4">
            <a href="#" class="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-full font-semibold text-center" data-button-id="cta">Sign Up</a>
          </div>
        </div>
      </div>
    </div>

    <script>
      function toggleCenteredMenu() {
        const menu = document.getElementById('centered-mobile-menu');
        menu.classList.toggle('hidden');
      }
    </script>
  </nav>
`,

  navbarSidebar: `
  <nav class="bg-gray-900 text-white sticky top-0 z-50" data-component="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-cube text-white text-sm"></i>
            </div>
            <span class="text-xl font-bold" data-text-id="brand">Dashboard</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-8">
            <a href="#" class="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-2" data-text-id="nav1">
              <i class="fas fa-home text-sm"></i>
              <span>Dashboard</span>
            </a>
            <a href="#" class="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-2" data-text-id="nav2">
              <i class="fas fa-chart-bar text-sm"></i>
              <span>Analytics</span>
            </a>
            <a href="#" class="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-2" data-text-id="nav3">
              <i class="fas fa-users text-sm"></i>
              <span>Team</span>
            </a>
            <a href="#" class="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-2" data-text-id="nav4">
              <i class="fas fa-cog text-sm"></i>
              <span>Settings</span>
            </a>
          </div>
        </div>

        <!-- User Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <i class="fas fa-bell text-lg"></i>
          </button>
          <div class="flex items-center space-x-3">
            <img src="/placeholder.svg?height=32&width=32" alt="User" class="w-8 h-8 rounded-full" />
            <div class="text-sm">
              <div class="font-medium" data-text-id="username">John Doe</div>
              <div class="text-gray-400 text-xs" data-text-id="userrole">Admin</div>
            </div>
          </div>
          <a href="#" class="bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-sm" data-button-id="cta">Upgrade</a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button type="button" class="text-gray-300 hover:text-white p-2" onclick="toggleSidebarMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden hidden" id="sidebar-mobile-menu">
        <div class="px-4 pt-2 pb-6 space-y-2 bg-gray-900 border-t border-gray-700">
          <a href="#" class="flex items-center space-x-3 text-white px-3 py-2 rounded-lg bg-gray-800" data-text-id="nav1">
            <i class="fas fa-home text-sm"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" class="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors" data-text-id="nav2">
            <i class="fas fa-chart-bar text-sm"></i>
            <span>Analytics</span>
          </a>
          <a href="#" class="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors" data-text-id="nav3">
            <i class="fas fa-users text-sm"></i>
            <span>Team</span>
          </a>
          <a href="#" class="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors" data-text-id="nav4">
            <i class="fas fa-cog text-sm"></i>
            <span>Settings</span>
          </a>
          <div class="pt-4 border-t border-gray-700">
            <div class="flex items-center space-x-3 px-3 py-2">
              <img src="/placeholder.svg?height=32&width=32" alt="User" class="w-8 h-8 rounded-full" />
              <div class="text-sm">
                <div class="font-medium text-white" data-text-id="username">John Doe</div>
                <div class="text-gray-400 text-xs" data-text-id="userrole">Admin</div>
              </div>
            </div>
            <a href="#" class="block bg-cyan-600 text-white px-3 py-2 rounded-lg font-semibold text-center mt-2" data-button-id="cta">Upgrade</a>
          </div>
        </div>
      </div>
    </div>

    <script>
      function toggleSidebarMenu() {
        const menu = document.getElementById('sidebar-mobile-menu');
        menu.classList.toggle('hidden');
      }
    </script>
  </nav>
`,
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
            © 2024 Your Brand. All rights reserved.
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
            © 2024 Your Company. All rights reserved.
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
            © 2024 Your Brand. All rights reserved.
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
  testimonialCard: `
  <section class="py-16 bg-gray-50" data-component="testimonial">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div class="flex items-center mb-6">
          <div class="flex text-yellow-400">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <blockquote class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic" data-text-id="quote">
          "This product has completely transformed how we work. The team is more productive, and our clients are happier than ever. I can't imagine going back to our old way of doing things."
        </blockquote>
        <div class="flex items-center">
          <img src="/placeholder.svg?height=60&width=60" alt="Customer" class="w-15 h-15 rounded-full mr-4" />
          <div>
            <div class="font-semibold text-gray-900 text-lg" data-text-id="name">Sarah Johnson</div>
            <div class="text-gray-600" data-text-id="title">CEO, TechCorp</div>
            <div class="text-sm text-gray-500" data-text-id="company">Fortune 500 Company</div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,

  pricingCard: `
  <section class="py-16 bg-white" data-component="pricing">
    <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white text-center">
          <h3 class="text-2xl font-bold mb-2" data-text-id="planname">Professional</h3>
          <div class="text-4xl font-bold mb-2">
            <span data-text-id="price">$29</span>
            <span class="text-lg font-normal opacity-75">/month</span>
          </div>
          <p class="opacity-90" data-text-id="description">Perfect for growing businesses</p>
        </div>
        <div class="px-6 py-8">
          <ul class="space-y-4 mb-8">
            <li class="flex items-center">
              <i class="fas fa-check text-green-500 mr-3"></i>
              <span data-text-id="feature1">Up to 10 team members</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-green-500 mr-3"></i>
              <span data-text-id="feature2">100GB storage</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-green-500 mr-3"></i>
              <span data-text-id="feature3">Priority support</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-green-500 mr-3"></i>
              <span data-text-id="feature4">Advanced analytics</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-green-500 mr-3"></i>
              <span data-text-id="feature5">API access</span>
            </li>
          </ul>
          <a href="#" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 block text-center" data-button-id="cta">
            Get Started
          </a>
          <p class="text-center text-sm text-gray-500 mt-4" data-text-id="note">
            14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </div>
  </section>
`,

  contactForm: `
  <section class="py-16 bg-gray-50" data-component="contact">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-text-id="title">
          Get In Touch
        </h2>
        <p class="text-xl text-gray-600" data-text-id="description">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John" />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@example.com" />
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input type="text" id="subject" name="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can we help?" />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Tell us about your project..."></textarea>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="newsletter" name="newsletter" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="newsletter" class="ml-2 text-sm text-gray-600">
              Subscribe to our newsletter for updates and tips
            </label>
          </div>
          <a href="#" class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center" data-button-id="submit">
            Send Message
          </a>
        </form>
      </div>
    </div>
  </section>
`,

  imageGallery: `
  <section class="py-16 bg-white" data-component="gallery">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-text-id="title">
          Our Gallery
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-text-id="description">
          Explore our collection of beautiful moments and stunning visuals that showcase our work and passion.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/placeholder.svg?height=300&width=400" alt="Gallery Image 1" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/placeholder.svg?height=300&width=400" alt="Gallery Image 2" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/placeholder.svg?height=300&width=400" alt="Gallery Image 3" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/placeholder.svg?height=300&width=400" alt="Gallery Image 4" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/placeholder.svg?height=300&width=400" alt="Gallery Image 5" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/placeholder.svg?height=300&width=400" alt="Gallery Image 6" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <i class="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="viewmore">
          View More
        </a>
      </div>
    </div>
  </section>
`,

  videoSection: `
  <section class="py-16 bg-gray-900 text-white" data-component="video">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" data-text-id="title">
          Watch Our Story
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto" data-text-id="description">
          Discover how we're making a difference and see our impact in action through this exclusive behind-the-scenes look.
        </p>
      </div>
      <div class="relative max-w-4xl mx-auto">
        <div class="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div class="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <img src="/placeholder.svg?height=400&width=700&text=Video+Thumbnail" alt="Video Thumbnail" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button class="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group">
                <i class="fas fa-play text-gray-900 text-2xl ml-1 group-hover:scale-110 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <div class="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div class="flex items-center">
              <i class="fas fa-clock mr-2"></i>
              <span data-text-id="duration">3:45</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-eye mr-2"></i>
              <span data-text-id="views">12.5K views</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-calendar mr-2"></i>
              <span data-text-id="date">Dec 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="cta">
          Learn More
        </a>
      </div>
    </div>
  </section>
`,

  faqSection: `
  <section class="py-16 bg-white" data-component="faq">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-text-id="title">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-gray-600" data-text-id="description">
          Find answers to common questions about our products and services.
        </p>
      </div>
      <div class="space-y-6">
        <div class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <div class="flex items-center justify-between cursor-pointer" onclick="toggleFaq(1)">
            <h3 class="text-lg font-semibold text-gray-900" data-text-id="question1">
              What is included in the free trial?
            </h3>
            <i class="fas fa-chevron-down text-gray-500 transition-transform" id="icon-1"></i>
          </div>
          <div class="mt-4 text-gray-600 hidden" id="answer-1" data-text-id="answer1">
            Our free trial includes full access to all features for 14 days. You can create unlimited projects, invite team members, and explore all premium features without any restrictions.
          </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <div class="flex items-center justify-between cursor-pointer" onclick="toggleFaq(2)">
            <h3 class="text-lg font-semibold text-gray-900" data-text-id="question2">
              Can I cancel my subscription anytime?
            </h3>
            <i class="fas fa-chevron-down text-gray-500 transition-transform" id="icon-2"></i>
          </div>
          <div class="mt-4 text-gray-600 hidden" id="answer-2" data-text-id="answer2">
            Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.
          </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <div class="flex items-center justify-between cursor-pointer" onclick="toggleFaq(3)">
            <h3 class="text-lg font-semibold text-gray-900" data-text-id="question3">
              Do you offer customer support?
            </h3>
            <i class="fas fa-chevron-down text-gray-500 transition-transform" id="icon-3"></i>
          </div>
          <div class="mt-4 text-gray-600 hidden" id="answer-3" data-text-id="answer3">
            We provide 24/7 customer support through email, live chat, and phone. Our dedicated support team is always ready to help you with any questions or issues you might have.
          </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
          <div class="flex items-center justify-between cursor-pointer" onclick="toggleFaq(4)">
            <h3 class="text-lg font-semibold text-gray-900" data-text-id="question4">
              Is my data secure?
            </h3>
            <i class="fas fa-chevron-down text-gray-500 transition-transform" id="icon-4"></i>
          </div>
          <div class="mt-4 text-gray-600 hidden" id="answer-4" data-text-id="answer4">
            Absolutely. We use enterprise-grade security measures including SSL encryption, regular security audits, and comply with GDPR and SOC 2 standards to ensure your data is always protected.
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4" data-text-id="contacttext">
          Still have questions?
        </p>
        <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" data-button-id="contact">
          Contact Support
        </a>
      </div>
    </div>

    <script>
      function toggleFaq(id) {
        const answer = document.getElementById('answer-' + id);
        const icon = document.getElementById('icon-' + id);
        
        if (answer.classList.contains('hidden')) {
          answer.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        } else {
          answer.classList.add('hidden');
          icon.style.transform = 'rotate(0deg)';
        }
      }
    </script>
  </section>
`,

  blogCard: `
  <section class="py-16 bg-gray-50" data-component="blog">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="md:flex">
          <div class="md:w-1/2">
            <img src="/placeholder.svg?height=300&width=500&text=Blog+Post+Image" alt="Blog Post" class="w-full h-64 md:h-full object-cover" />
          </div>
          <div class="md:w-1/2 p-8">
            <div class="flex items-center mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full" data-text-id="category">
                Technology
              </span>
              <span class="text-gray-500 text-sm ml-4" data-text-id="date">
                Dec 15, 2024
              </span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors" data-text-id="title">
              The Future of Web Development: Trends to Watch in 2025
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed" data-text-id="excerpt">
              Discover the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, learn what's coming next.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img src="/placeholder.svg?height=40&width=40" alt="Author" class="w-10 h-10 rounded-full mr-3" />
                <div>
                  <div class="font-semibold text-gray-900 text-sm" data-text-id="author">
                    Alex Johnson
                  </div>
                  <div class="text-gray-500 text-xs" data-text-id="readtime">
                    5 min read
                  </div>
                </div>
              </div>
              <a href="#" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" data-button-id="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,

  statsCounter: `
  <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-component="stats">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" data-text-id="title">
          Our Impact by the Numbers
        </h2>
        <p class="text-xl opacity-90 max-w-3xl mx-auto" data-text-id="description">
          See how we're making a difference and driving success for businesses worldwide.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
            <div class="text-4xl md:text-5xl font-bold mb-2 counter" data-target="1000" data-text-id="stat1">
              1,000+
            </div>
            <p class="text-lg opacity-90" data-text-id="stat1label">
              Happy Customers
            </p>
            <div class="w-12 h-1 bg-white bg-opacity-50 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
        <div class="text-center">
          <div class="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
            <div class="text-4xl md:text-5xl font-bold mb-2 counter" data-target="50" data-text-id="stat2">
              50+
            </div>
            <p class="text-lg opacity-90" data-text-id="stat2label">
              Countries Served
            </p>
            <div class="w-12 h-1 bg-white bg-opacity-50 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
        <div class="text-center">
          <div class="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
            <div class="text-4xl md:text-5xl font-bold mb-2 counter" data-target="99" data-text-id="stat3">
              99.9%
            </div>
            <p class="text-lg opacity-90" data-text-id="stat3label">
              Uptime Guarantee
            </p>
            <div class="w-12 h-1 bg-white bg-opacity-50 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
        <div class="text-center">
          <div class="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
            <div class="text-4xl md:text-5xl font-bold mb-2 counter" data-target="24" data-text-id="stat4">
              24/7
            </div>
            <p class="text-lg opacity-90" data-text-id="stat4label">
              Expert Support
            </p>
            <div class="w-12 h-1 bg-white bg-opacity-50 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a href="#" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" data-button-id="cta">
          Join Us Today
        </a>
      </div>
    </div>

    <script>
      // Simple counter animation (basic version)
      function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const text = counter.textContent;
          // This is a simplified version - in a real implementation you'd want proper animation
          counter.textContent = text;
        });
      }
      
      // Run animation when page loads
      document.addEventListener('DOMContentLoaded', animateCounters);
    </script>
  </section>
`,
}
