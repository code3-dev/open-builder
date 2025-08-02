"use client"

import { Monitor, Tablet } from "lucide-react"

export function MobileRestriction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Desktop Required</h1>
          <p className="text-gray-600 leading-relaxed">
            Open Builder requires a larger screen for the best experience. Please use a desktop or tablet device.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Tablet className="w-4 h-4" />
              <span>Tablet</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400">Minimum screen width: 768px</div>
      </div>
    </div>
  )
}
