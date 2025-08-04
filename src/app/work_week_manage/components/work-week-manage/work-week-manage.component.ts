import { Component } from '@angular/core';
import { WorkWeekService } from '../../services/work-week.service';
import { AuthStorageHelper } from '../../../auth/service/auth-storage.helper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Schedules } from '../../models/schedule/schedule.model';

@Component({
  selector: 'app-work-week-manage',
  templateUrl: './work-week-manage.component.html',
  styleUrl: './work-week-manage.component.scss',
})
export class WorkWeekManageComponent {
  isEditable = false;

  loged_user: any;
  constructor(
    private workweek_service: WorkWeekService,
    private auth_storage_helper: AuthStorageHelper
  ) {
    this.loged_user = auth_storage_helper.get_user();
    this.getSPWorkWeek();
  }
  // isChecked = true;
  work_week: Array<any> | undefined;
  getSPWorkWeek() {
    this.workweek_service.getWorkWeek(
      (response: any) => {
        console.log(response);
        this.work_week = response.schedule;
      },
      (error: any) => {},
      this.loged_user.service_provider_data._id
    );
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

  updateData() {
    
    const schedules: Schedules = {
      schedule: [],
      serviceProvider: this.loged_user.service_provider_data._id,
    };
    
    const days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    
    days.forEach((day: string) => {
      const dayActive = (document.querySelector(`#${day}-active`) as HTMLInputElement)?.checked || false;
      const dayStart = (document.querySelector(`#${day}-start`) as HTMLInputElement)?.value || '';
      const dayEnd = (document.querySelector(`#${day}-end`) as HTMLInputElement)?.value || '';
    
      schedules.schedule.push({
        day: day,
        is_active: dayActive,
        open_time: dayStart,
        close_time: dayEnd,
      });
    });
    

    this.workweek_service.editCategory(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {},
      schedules
    );
    this.isEditable = false;
  }
}
