'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight, ChevronLeft, Laptop, Code2, Boxes } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const [isRightInfoOpen, setIsRightInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300',
          isLeftNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsLeftNavOpen(false)}
      />

      {/* Left Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-card z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:w-[15%] border-r',
          isLeftNavOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              DevSpace
            </h2>
            <button
              onClick={() => setIsLeftNavOpen(false)}
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-2">
            {[
              { icon: Laptop, text: 'Dashboard' },
              { icon: Code2, text: 'Projects' },
              { icon: Boxes, text: 'Components' },
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-2 p-2 hover:bg-accent rounded-md transition-all duration-200 hover:translate-x-1"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className={cn(
          'min-h-screen lg:ml-[15%] transition-all duration-300',
          isRightInfoOpen ? 'lg:mr-[15%]' : ''
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 lg:hidden border-b bg-card/50 backdrop-blur-sm sticky top-0 z-30">
          <button
            onClick={() => setIsLeftNavOpen(true)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold">DevSpace</h1>
          <div className="w-8" /> {/* Spacer for alignment */}
        </div>

        {/* Main Content Area */}
        <div className="p-6 pt-20 lg:pt-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Welcome to DevSpace
            </h1>
            <p className="text-lg text-muted-foreground">
              Your modern development environment with everything you need to build amazing applications.
              Explore our tools, components, and resources to enhance your workflow.
            </p>
            <button
              onClick={() => setIsRightInfoOpen(!isRightInfoOpen)}
              className="group flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all duration-200"
            >
              <span>View Info</span>
              <ChevronRight className={cn(
                "h-4 w-4 transition-transform duration-200",
                isRightInfoOpen ? "rotate-180" : "group-hover:translate-x-1"
              )} />
            </button>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                  <p className="text-muted-foreground">
                    Discover powerful development tools and resources to accelerate your workflow.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right Info Panel */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full bg-card border-l transform transition-all duration-300 ease-in-out overflow-hidden z-50',
          isRightInfoOpen
            ? 'w-full lg:w-[15%] translate-x-0'
            : 'w-0 translate-x-full'
        )}
      >
        <div className="p-4 pt-20 lg:pt-4 min-w-[250px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Information</h2>
            <button
              onClick={() => setIsRightInfoOpen(false)}
              className="p-2 hover:bg-accent rounded-md transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-accent rounded-md">
              <h3 className="font-medium mb-1">Active Users</h3>
              <p className="text-sm text-muted-foreground">1,234 online</p>
            </div>
            <div className="p-3 bg-accent rounded-md">
              <h3 className="font-medium mb-1">Projects</h3>
              <p className="text-sm text-muted-foreground">789 total</p>
            </div>
            <div className="p-3 bg-accent rounded-md">
              <h3 className="font-medium mb-1">Components</h3>
              <p className="text-sm text-muted-foreground">56 available</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}