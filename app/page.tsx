'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight, ChevronLeft, Laptop, Code2, Boxes } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const [isRightInfoOpen, setIsRightInfoOpen] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent relative">
      {/* ✅ Mobile Overlay */}
      {(isLeftNavOpen || isRightInfoOpen) && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => {
            setIsLeftNavOpen(false);
            setIsRightInfoOpen(false);
          }}
        />
      )}

      {/* ✅ Left Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 h-full bg-card z-50 transform transition-transform duration-300 ease-in-out border-r',
          isLeftNavOpen ? 'translate-x-0 w-full lg:w-[15%]' : '-translate-x-full lg:translate-x-0 w-full lg:w-[15%]'
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

          {/* ✅ Navigation Buttons */}
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

      {/* ✅ Main Content */}
      {isMainVisible && (
        <main
          className={cn(
            'min-h-screen transition-all duration-300',
            isRightInfoOpen ? 'lg:mr-[15%]' : '',
            isLeftNavOpen ? 'lg:ml-[15%]' : ''
          )}
        >
          <div className="p-6 pt-20 lg:pt-6 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Welcome to DevSpace
              </h1>
              <p className="text-lg text-muted-foreground">
                Your modern development environment with everything you need to build amazing applications.
              </p>
              <button
                onClick={() => setIsRightInfoOpen(!isRightInfoOpen)}
                className="group flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all duration-200"
              >
                <span>View Info</span>
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isRightInfoOpen ? 'rotate-180' : 'group-hover:translate-x-1'
                  )}
                />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ✅ Right Info Panel */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full bg-card border-l transform transition-all duration-300 ease-in-out overflow-hidden z-50',
          isRightInfoOpen ? 'w-full lg:w-[15%] translate-x-0' : 'w-0 translate-x-full'
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
          </div>
        </div>
      </aside>

      {/* ✅ Bottom Control Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full bg-card p-4 border-t flex justify-around lg:hidden z-50">
        {/* Left Section Button */}
        <button
          onClick={() => {
            setIsLeftNavOpen(true);
            setIsMainVisible(false); // Close Main
            setIsRightInfoOpen(false);
          }}
          className="p-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
        >
          Left
        </button>

        {/* Main Section Button */}
        <button
          onClick={() => {
            setIsMainVisible(true);
            setIsLeftNavOpen(false);
            setIsRightInfoOpen(false);
          }}
          className="p-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
        >
          Main
        </button>

        {/* Right Section Button */}
        <button
          onClick={() => {
            setIsRightInfoOpen(true);
            setIsMainVisible(false);
            setIsLeftNavOpen(false);
          }}
          className="p-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
        >
          Right
        </button>
      </div>
    </div>
  );
}
