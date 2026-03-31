import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glucose-dashboard',
  imports: [CommonModule],
  templateUrl: './glucose-dashboard.html',
  styleUrl: './glucose-dashboard.css',
})
export class GlucoseDashboard {
  readings: { glucose: number; date: string; time: string; status: string }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  addReading(glucoseValue: string, dateValue: string, timeValue: string) {
    if (!glucoseValue || !dateValue || !timeValue) {
      return;
    }

    const glucoseNumber = Number(glucoseValue);

    let status = 'Normal';
    if (glucoseNumber < 70) {
      status = 'Low';
    } else if (glucoseNumber > 180) {
      status = 'High';
    }

    const newReading = {
      glucose: glucoseNumber,
      date: dateValue,
      time: timeValue,
      status: status,
    };

    this.readings = [...this.readings, newReading];

    this.cdr.detectChanges();
  }
}