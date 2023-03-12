import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crm-container',
  templateUrl: './crm-container.component.html',
  styleUrls: ['./crm-container.component.css']
})
export class CrmContainerComponent {

  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any> | undefined;


}
