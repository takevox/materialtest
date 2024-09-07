import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"

@Component({
  selector: 'app-time-add-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './time-add-node.component.html',
  styleUrl: './time-add-node.component.scss'
})
export class TimeAddNodeComponent extends CustomNodeComponent {}
