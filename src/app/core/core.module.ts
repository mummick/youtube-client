import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './pages/error/error.component';
import { BlankComponent } from './pages/blank/blank.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [HeaderComponent, ErrorComponent, BlankComponent, AuthComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
