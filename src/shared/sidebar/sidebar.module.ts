import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidebarNav } from './sidebar';

@NgModule({
  declarations: [
    SidebarNav,
  ],
  imports: [
    IonicPageModule.forChild(SidebarNav),
  ],
})
export class SidebarNavModule {}
