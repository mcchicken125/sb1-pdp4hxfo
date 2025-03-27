import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Camera, ChevronDown, Filter, Layers, Image, Search, Grid2X2, List, ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Residential Land Clearing",
      location: "Charlotte, NC",
      description: "5-acre residential property cleared for new home construction with forestry mulching to preserve topsoil.",
      services: ["Land Clearing", "Forestry Mulching"],
      beforeImage: "https://i.imgur.com/IdPkGgJ.jpeg",
      afterImage: "https://i.imgur.com/LN3TpMp.jpeg",
      category: "land-clearing"
    },
    {
      title: "Commercial Forestry Mulching",
      location: "Fort Mill, SC",
      description: "20-acre commercial development site prepared using forestry mulching for efficient vegetation management.",
      services: ["Forestry Mulching"],
      beforeImage: "https://i.imgur.com/eONuwDf.jpeg",
      afterImage: "https://i.imgur.com/JJVeFld.jpeg",
      category: "forestry-mulching"
    },
    {
      title: "Commercial Building Demolition",
      location: "Huntersville, NC",
      description: "Complete demolition of a 15,000 sq ft commercial structure with full debris removal and site cleanup.",
      services: ["Demolition", "Site Cleanup"],
      beforeImage: "https://images.unsplash.com/photo-1526797001-a818be3e0cd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "demolition"
    },
    {
      title: "Residential Septic Installation",
      location: "Matthews, NC",
      description: "Complete septic system installation for a new 4-bedroom home, including tank placement and drain field setup.",
      services: ["Septic Installation", "Site Preparation"],
      beforeImage: "https://i.imgur.com/Yu9Hif5.jpeg",
      afterImage: "https://i.imgur.com/Yu9Hif5.jpeg",
      category: "septic-installation"
    }
  ];
  
  // Filter categories
  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'land-clearing', label: 'Land Clearing' },
    { id: 'forestry-mulching', label: 'Forestry Mulching' },
    { id: 'demolition', label: 'Demolition' },
    { id: 'septic-installation', label: 'Septic Installation' }
  ];
  
  // Filter projects based on category and search term
  const filteredProjects = projects
    .filter(project => filter === 'all' || project.category === filter)
    .filter(project => 
      searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
  // Handle scroll behavior for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const filterSection = document.getElementById('portfolio-filter');
      if (filterSection) {
        if (window.scrollY > 300) {
          filterSection.classList.add('shadow-md');
        } else {
          filterSection.classList.remove('shadow-md');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl transition-all duration-700 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-600 bg-opacity-90 rounded-full mb-6 backdrop-blur-sm">
              <Image className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-white">Project Showcase</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
            
            {/* Description */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore our completed projects and see the transformations we've achieved for our clients across the Carolinas.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">30+</p>
                <p className="text-white text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">500+</p>
                <p className="text-white text-sm">Acres Cleared</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">50+</p>
                <p className="text-white text-sm">Counties Served</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-3xl font-bold text-primary-300 mb-1">100%</p>
                <p className="text-white text-sm">Client Satisfaction</p>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-16">
              <a 
                href="#portfolio-filter" 
                className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm mb-2">View Projects</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Portfolio Filter */}
      <section id="portfolio-filter" className="py-6 bg-white border-b border-gray-200 sticky top-0 z-30 transition-shadow duration-300">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-300 mr-4 md:hidden"
                >
                  <Filter className="w-5 h-5 mr-1" />
                  <span>Filter</span>
                </button>
                
                <div className="hidden md:flex items-center space-x-2">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      view === 'grid' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid2X2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      view === 'list' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`flex flex-wrap items-center justify-center gap-2 transition-all duration-300 ${
            isFilterOpen || window.innerWidth >= 768 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100 overflow-hidden'
          }`}>
            {filterCategories.map((category) => (
              <button 
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Filter by ${category.label}`}
                aria-pressed={filter === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section 
        ref={ref}
        className="py-16 bg-gray-50"
      >
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filter === 'all' ? 'All Projects' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Projects`}
                  <span className="ml-2 text-lg font-normal text-gray-500">({filteredProjects.length})</span>
                </h2>
                
                <div className="flex items-center space-x-2 md:hidden">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      view === 'grid' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid2X2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      view === 'list' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'text-gray-500 hover:text-primary-600'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className={`grid ${
                view === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                  : 'grid-cols-1 gap-6'
              } transition-all duration-500`}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    location={project.location}
                    description={project.description}
                    services={project.services}
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any projects matching your search criteria. Please try different keywords or filters.
                </p>
                <button 
                  onClick={() => {
                    setFilter('all');
                    setSearchTerm('');
                  }}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
          
          {/* Featured Project - Only show if there are projects */}
          {filteredProjects.length > 0 && (
            <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                    Featured Project
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src="https://i.imgur.com/IdPkGgJ.jpeg" 
                      alt="Featured project before" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium bg-gray-900/80 px-2 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src="https://i.imgur.com/LN3TpMp.jpeg" 
                      alt="Featured project after" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium bg-primary-600 px-2 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Large-Scale Land Clearing Project</h3>
                  <p className="text-gray-500 mb-4">Charlotte, NC</p>
                  <p className="text-gray-700 mb-6">
                    This 15-acre project showcases our comprehensive land clearing capabilities. Our team efficiently cleared dense vegetation while preserving select mature trees, creating an ideal space for future development.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">Land Clearing</span>
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">Forestry Mulching</span>
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">Site Preparation</span>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                  >
                    View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Project Process</h2>
            <p className="text-gray-600">
              We follow a structured approach to ensure every project is completed efficiently, safely, and to your satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2 group-hover:text-primary-600 transition-colors duration-300">Initial Consultation</h3>
              <p className="text-gray-600">
                We meet with you to understand your project needs, assess the property, and discuss potential approaches.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2 group-hover:text-primary-600 transition-colors duration-300">Detailed Proposal</h3>
              <p className="text-gray-600">
                We provide a comprehensive quote with clear pricing, timeline, and approach tailored to your specific project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2 group-hover:text-primary-600 transition-colors duration-300">Project Execution</h3>
              <p className="text-gray-600">
                Our experienced team completes the work efficiently using specialized equipment and environmentally sound practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2 group-hover:text-primary-600 transition-colors duration-300">Final Inspection</h3>
              <p className="text-gray-600">
                We conduct a thorough walkthrough with you to ensure the project meets your expectations and our quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to discuss your land clearing needs and get a free, no-obligation quote."
      />
    </>
  );
};

export default PortfolioPage;