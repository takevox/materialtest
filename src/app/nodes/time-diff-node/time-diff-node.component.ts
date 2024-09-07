import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { VflowModule, Node, Edge, CustomNodeComponent, Connection, ComponentNode, SharedNode, DefaultNode, ConnectionSettings } from "ngx-vflow"

@Component({
  selector: 'app-time-diff-node',
  standalone: true,
  imports: [
    VflowModule,
  ],
  templateUrl: './time-diff-node.component.html',
  styleUrl: './time-diff-node.component.scss'
})
export class TimeDiffNodeComponent extends CustomNodeComponent {}
