"use client"

import { Bot } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
        <Bot className="h-5 w-5 text-white" />
      </div>
      <span className="font-bold text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        BSBridge
      </span>
    </div>
  )
}
