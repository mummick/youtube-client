import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [CreateCardComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
  exports: [CreateCardComponent],
})
export class AdminModule {}
