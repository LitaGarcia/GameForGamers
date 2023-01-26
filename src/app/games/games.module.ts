import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamescardComponent } from './components/gamescard/gamescard.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PrimeNGMaterialModule } from '../prime-ngmaterial/prime-ngmaterial.module';

@NgModule({
  exports: [GamescardComponent, FiltersComponent],
  declarations: [GamescardComponent, FiltersComponent],
  imports: [CommonModule, PrimeNGMaterialModule],
})
export class GamesModule {}
