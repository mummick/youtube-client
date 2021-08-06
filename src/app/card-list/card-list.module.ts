import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [CardListComponent, CardItemComponent],
  imports: [CommonModule],
})
export class CardListModule {}
