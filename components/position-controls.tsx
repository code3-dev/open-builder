"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown, MoveUp, MoveDown } from "lucide-react"
import type { Block } from "@/app/page"

interface PositionControlsProps {
  block: Block
  blocks: Block[]
  onMoveBlock: (blockId: string, direction: "up" | "down") => void
  onMoveToPosition: (blockId: string, position: "top" | "bottom") => void
}

export function PositionControls({ block, blocks, onMoveBlock, onMoveToPosition }: PositionControlsProps) {
  const currentIndex = blocks.findIndex((b) => b.id === block.id)
  const isFirst = currentIndex === 0
  const isLast = currentIndex === blocks.length - 1

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Position Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-xs text-gray-600 mb-2">
          Position: {currentIndex + 1} of {blocks.length}
        </div>

        {/* Move Up/Down */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onMoveBlock(block.id, "up")}
            disabled={isFirst}
            className="flex items-center justify-center"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Move Up
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onMoveBlock(block.id, "down")}
            disabled={isLast}
            className="flex items-center justify-center"
          >
            <ArrowDown className="w-4 h-4 mr-1" />
            Move Down
          </Button>
        </div>

        {/* Move to Top/Bottom */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onMoveToPosition(block.id, "top")}
            disabled={isFirst}
            className="flex items-center justify-center"
          >
            <MoveUp className="w-4 h-4 mr-1" />
            To Top
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onMoveToPosition(block.id, "bottom")}
            disabled={isLast}
            className="flex items-center justify-center"
          >
            <MoveDown className="w-4 h-4 mr-1" />
            To Bottom
          </Button>
        </div>

        {/* Quick Position Selector */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600">Quick Position</label>
          <div className="grid grid-cols-3 gap-1">
            {blocks.map((_, index) => (
              <Button
                key={index}
                size="sm"
                variant={currentIndex === index ? "default" : "outline"}
                onClick={() => {
                  if (index !== currentIndex) {
                    const direction = index < currentIndex ? "up" : "down"
                    const steps = Math.abs(index - currentIndex)

                    // Move block step by step to target position
                    let currentPos = currentIndex
                    for (let i = 0; i < steps; i++) {
                      if (direction === "up" && currentPos > index) {
                        onMoveBlock(block.id, "up")
                        currentPos--
                      } else if (direction === "down" && currentPos < index) {
                        onMoveBlock(block.id, "down")
                        currentPos++
                      }
                    }
                  }
                }}
                className="text-xs h-8"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>

        {/* Visual Position Indicator */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Page Structure</label>
          <div className="space-y-1">
            {blocks.map((b, index) => (
              <div
                key={b.id}
                className={`text-xs p-2 rounded border ${
                  b.id === block.id ? "bg-blue-100 border-blue-300 font-medium" : "bg-gray-50 border-gray-200"
                }`}
              >
                {index + 1}. {b.type.replace(/([A-Z])/g, " $1").trim()}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
