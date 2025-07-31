import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronExpressionEvaluatorComponent } from './cron-expression-evaluator/cron-expression-evaluator.component';
import { RecurrencePatternGeneratorComponent } from './recurrence-pattern-generator/recurrence-pattern-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CronExpressionEvaluatorComponent, RecurrencePatternGeneratorComponent],
  templateUrl:'app.component.html',
  styleUrl:'app.component.css'
})
export class AppComponent {
  title = 'cron_angular';
}
