import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"



@Component({
  selector: 'app-widget-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './widget-node.component.html',
  styleUrl: './widget-node.component.scss'
})
export class WidgetNodeComponent extends CustomNodeComponent {}
