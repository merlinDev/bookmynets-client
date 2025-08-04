export interface Schedule {
  day: string;
  is_active: boolean;
  open_time: string;
  close_time: string;
}

export interface Schedules {
  schedule: Schedule[];
  serviceProvider: string;
}