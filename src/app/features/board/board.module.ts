// src/app/features/board/board.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board.component';

@NgModule({
  imports: [CommonModule, DragDropModule, BoardComponent],
  exports: [BoardComponent]
})
export class BoardModule {}



