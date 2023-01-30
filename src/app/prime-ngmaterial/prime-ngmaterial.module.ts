import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  exports: [CommonModule, CardModule, ButtonModule, RatingModule, TagModule],
})
export class PrimeNGMaterialModule {}
