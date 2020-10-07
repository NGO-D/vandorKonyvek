import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule ({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule]
}) 

export class MaterialModule {}