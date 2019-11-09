import {
  Directive,
  ElementRef,
  HostListener,
  EventEmitter,
  Inject
} from "@angular/core";

// based on https://javascript.info/mouse-drag-and-drop
@Directive({
  selector: "[appDraggable]"
})
export class DraggableDirective {
  private currentX = null;
  private currentY = null;
  private selectedElement = null;

  constructor(private el: ElementRef) {
    el.nativeElement.setAttribute("draggable", "true");
  }
  @HostListener("document:drag", ["$event"])
  onDragStart(event) {
    console.log("dragStart1", event.clientX, event.clientY);

    // we make sure only draggables on the document elements are selected
    // if (event.target.getAttribute("draggable")) {
    //   console.log("mousedown");

    //   this.currentX = event.clientX;
    //   this.currentY = event.clientY;
    //   this.selectedElement = event.target;
    //   // ##### add this code.
    event.preventDefault(); // choose one
    //   // ##### or add this code.
    //   return false; // choose one
    // }
  }

  @HostListener("document:mousedown", ["$event"])
  onMouseDown(event) {
    console.log("dragStart", event.clientX, event.clientY);

    // we make sure only draggables on the document elements are selected
    // if (event.target.getAttribute("draggable")) {
    //   console.log("mousedown");

    //   this.currentX = event.clientX;
    //   this.currentY = event.clientY;
    //   this.selectedElement = event.target;
    //   // ##### add this code.
    event.preventDefault(); // choose one
    //   // ##### or add this code.
    //   return false; // choose one
    // }
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event) {
    console.log("mousemove");
    // console.log("dragStart", event.clientX, event.clientY);

    // if (this.selectedElement) {
    //   const dx =
    //     +this.selectedElement.getAttribute("x") + event.clientX - this.currentX;
    //   const dy =
    //     +this.selectedElement.getAttribute("y") + event.clientY - this.currentY;

    //   this.currentX = event.clientX;
    //   this.currentY = event.clientY;

    //   this.selectedElement.setAttribute("x", dx);
    //   this.selectedElement.setAttribute("y", dy);
    // }
  }

  @HostListener("document:mouseup", ["$event"])
  onMouseUp(event) {
    console.log("mouseup");
    console.log("dragEnd", event.clientX, event.clientY);
    // this.selectedElement = null;
  }
}
