"use client"

import { useState } from "react"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import type { Block } from "@/app/page"
import { Trash2, Copy, Move, ArrowUp, ArrowDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditableComponent } from "@/components/editable-component"
import { ConfirmationDialog } from "@/components/confirmation-dialog"

interface PreviewAreaProps {
  blocks: Block[]
  selectedBlock: string | null
  onBlockSelect: (blockId: string | null) => void
  previewMode: "desktop" | "tablet" | "mobile"
  onDeleteBlock: (blockId: string) => void
  onDuplicateBlock: (blockId: string) => void
  onMoveBlock?: (blockId: string, direction: "up" | "down") => void
  onShowPropertyPanel?: () => void
}

export function PreviewArea({
  blocks,
  selectedBlock,
  onBlockSelect,
  previewMode,
  onDeleteBlock,
  onDuplicateBlock,
  onMoveBlock,
  onShowPropertyPanel,
}: PreviewAreaProps) {
  const [deleteDialog, setDeleteDialog] = useState<{ isOpen: boolean; blockId: string | null }>({
    isOpen: false,
    blockId: null,
  })

  const getPreviewWidth = () => {
    switch (previewMode) {
      case "mobile":
        return "max-w-sm"
      case "tablet":
        return "max-w-2xl"
      default:
        return "max-w-full"
    }
  }

  const handleDeleteClick = (blockId: string) => {
    setDeleteDialog({ isOpen: true, blockId })
  }

  const handleDeleteConfirm = () => {
    if (deleteDialog.blockId) {
      onDeleteBlock(deleteDialog.blockId)
    }
    setDeleteDialog({ isOpen: false, blockId: null })
  }

  const getBlockName = (blockId: string) => {
    const block = blocks.find((b) => b.id === blockId)
    return block ? block.type.replace(/([A-Z])/g, " $1").trim() : "Component"
  }

  return (
    <>
      <div className="flex-1 overflow-auto bg-gray-100 p-6">
        <div className={`mx-auto bg-white shadow-lg rounded-lg overflow-hidden ${getPreviewWidth()}`}>
          <Droppable droppableId="canvas">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`min-h-96 ${
                  snapshot.isDraggingOver ? "bg-blue-50" : ""
                } ${blocks.length === 0 ? "flex items-center justify-center" : ""}`}
              >
                {blocks.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Move className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Start Building</h3>
                    <p className="text-gray-500">Drag components from the sidebar to start building your page</p>
                  </div>
                ) : (
                  blocks.map((block, index) => (
                    <Draggable key={block.id} draggableId={block.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`relative group ${
                            selectedBlock === block.id ? "ring-2 ring-blue-500" : ""
                          } ${snapshot.isDragging ? "opacity-50" : ""}`}
                        >
                          <div
                            {...provided.dragHandleProps}
                            className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex space-x-1"
                          >
                            <Button size="sm" variant="secondary" title="Drag to reorder">
                              <Move className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation()
                                onMoveBlock?.(block.id, "up")
                              }}
                              disabled={index === 0}
                              title="Move up"
                            >
                              <ArrowUp className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation()
                                onMoveBlock?.(block.id, "down")
                              }}
                              disabled={index === blocks.length - 1}
                              title="Move down"
                            >
                              <ArrowDown className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation()
                                onShowPropertyPanel?.()
                              }}
                              title="Settings"
                            >
                              <Settings className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation()
                                onDuplicateBlock(block.id)
                              }}
                              title="Duplicate"
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteClick(block.id)
                              }}
                              title="Delete"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                          <EditableComponent block={block} onClick={() => onBlockSelect(block.id)} />
                        </div>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>

      <ConfirmationDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, blockId: null })}
        onConfirm={handleDeleteConfirm}
        title="Delete Component"
        description={`Are you sure you want to delete the "${getBlockName(deleteDialog.blockId || "")}" component? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
      />
    </>
  )
}
