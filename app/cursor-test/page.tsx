"use client";

import TargetCursor from '@/components/ui/TargetCursor';

export default function CursorTest() {
  return (
    <div className="min-h-screen bg-black-100 p-8 text-white">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        size={30}
        color="#8b5cf6"
      />
      
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Cursor Animation Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button className="cursor-target bg-purple hover:bg-purple/80 text-white font-bold py-4 px-8 rounded-lg transition-colors">
            Hover over me!
          </button>
          
          <div className="cursor-target bg-black-200 border border-white/20 p-6 rounded-lg hover:border-purple transition-colors">
            <h3 className="text-xl font-semibold mb-2">Interactive Card</h3>
            <p className="text-white-200">This card has the cursor-target class</p>
          </div>
          
          <a href="#" className="cursor-target block bg-gradient-to-r from-purple to-pink-500 p-6 rounded-lg text-center font-semibold">
            Link with Animation
          </a>
          
          <div className="cursor-target p-6 border-2 border-dashed border-white/30 rounded-lg text-center">
            <p>Dashed Border Element</p>
            <p className="text-sm text-white-200 mt-2">Watch the cursor transform!</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-black-200 p-6 rounded-lg border border-white/20 mb-6">
            <h2 className="text-xl font-semibold mb-4">How to Use TargetCursor:</h2>
            <div className="text-left space-y-2 text-sm">
              <p><strong>1. Import:</strong> <code className="bg-black-300 px-2 py-1 rounded">import TargetCursor from &apos;./TargetCursor&apos;;</code></p>
              <p><strong>2. Add Component:</strong> Place <code className="bg-black-300 px-2 py-1 rounded">&lt;TargetCursor /&gt;</code> in your app</p>
              <p><strong>3. Add Class:</strong> Add <code className="bg-black-300 px-2 py-1 rounded">cursor-target</code> class to interactive elements</p>
              <p><strong>4. Customize:</strong> Use props like <code className="bg-black-300 px-2 py-1 rounded">spinDuration</code>, <code className="bg-black-300 px-2 py-1 rounded">size</code>, <code className="bg-black-300 px-2 py-1 rounded">color</code></p>
            </div>
          </div>
          
          <p className="text-white-200 mb-4">
            Move your mouse around and hover over the interactive elements above
          </p>
          <p className="text-sm text-white-300">
            The cursor should spin continuously and scale up when hovering over elements with the &apos;cursor-target&apos; class
          </p>
          
          <div className="mt-6">
            <a href="/" className="cursor-target text-purple hover:text-white transition-colors">
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
