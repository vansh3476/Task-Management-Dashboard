
// Mock declaration file for react-beautiful-dnd
declare module 'react-beautiful-dnd' {
  import * as React from 'react';

  // DroppableProvided
  export interface DroppableProvided {
    innerRef: React.RefObject<HTMLElement>;
    droppableProps: {
      [key: string]: any;
    };
    placeholder: React.ReactElement | null;
  }

  // DraggableProvided
  export interface DraggableProvided {
    innerRef: React.RefObject<HTMLElement>;
    draggableProps: {
      [key: string]: any;
      style?: React.CSSProperties;
    };
    dragHandleProps: {
      [key: string]: any;
    } | null;
  }

  // DraggableStateSnapshot
  export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    draggingOver: string | null;
    dropAnimation: {
      duration: number;
      curve: string;
      moveTo: {
        x: number;
        y: number;
      };
    } | null;
    mode: 'FLUID' | 'SNAP';
    combineWith: string | null;
    combineTargetFor: string | null;
  }

  // DroppableStateSnapshot
  export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith: string | null;
    draggingFromThisWith: string | null;
  }

  // DragDropContext props
  export interface DragDropContextProps {
    onDragStart?: (start: DragStart) => void;
    onDragUpdate?: (update: DragUpdate) => void;
    onDragEnd: (result: DropResult) => void;
    children: React.ReactNode;
  }

  // Droppable props
  export interface DroppableProps {
    droppableId: string;
    type?: string;
    mode?: 'standard' | 'virtual';
    isDropDisabled?: boolean;
    isCombineEnabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    ignoreContainerClipping?: boolean;
    renderClone?: any;
    getContainerForClone?: () => HTMLElement;
    children: (
      provided: DroppableProvided,
      snapshot: DroppableStateSnapshot
    ) => React.ReactElement;
  }

  // Draggable props
  export interface DraggableProps {
    draggableId: string;
    index: number;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
    shouldRespectForcePress?: boolean;
    children: (
      provided: DraggableProvided,
      snapshot: DraggableStateSnapshot
    ) => React.ReactElement;
  }

  // DragStart
  export interface DragStart {
    draggableId: string;
    type: string;
    source: {
      droppableId: string;
      index: number;
    };
    mode: 'FLUID' | 'SNAP';
  }

  // DragUpdate
  export interface DragUpdate extends DragStart {
    destination?: {
      droppableId: string;
      index: number;
    };
    combine?: {
      draggableId: string;
      droppableId: string;
    };
  }

  // DropResult
  export interface DropResult extends DragUpdate {
    reason: 'DROP' | 'CANCEL';
  }

  // Components
  export class DragDropContext extends React.Component<DragDropContextProps> {}
  export class Droppable extends React.Component<DroppableProps> {}
  export class Draggable extends React.Component<DraggableProps> {}
}
