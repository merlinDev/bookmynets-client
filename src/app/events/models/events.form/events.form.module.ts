import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsModel } from '../events.module';
import { EventsData } from '../events-data.module';



export class EventsFormModule {
  [x: string]: any;
  form: FormGroup;
  constructor();
  constructor(obj: EventsModel);
  constructor(obj?: EventsModel) {
      this.form = new FormGroup({
          title: new FormControl('', [Validators.required]),
          date: new FormControl('', [Validators.required]),
          location: new FormControl([''], [Validators.required]),
          description: new FormControl('', [])
      });

      if (obj) {
          this.form.patchValue({
            title: obj.title,
            date: new Date(obj.date),
            location:obj.location.name,
            description: obj.description,
          });
      }
  }


  is_valid(/* required param here */): boolean {
      // validate from here and  get validation messages
      return this.form.valid
  }

  get_value(): EventsData {
      // return value model
      return {
        title: this.form.value.title.trim(),
        date: this.form.value.date.trim(),
        location:this.form.value.location.trim(),
        description: this.form.value.description.trim()
      }
  }

  /**
   * Get user name error message
   */
  public get username_error():string | null {
      if (!this.form.controls['username'].touched)
          return null

      if (this.form.controls['username'].getError('required'))
          return 'Username is required'

          if (this.form.controls['username'].getError('email'))
          return 'Username should be a email'

      return null
  }

  /**
   * Get password error message
   */
  public get password_error():string | null {
      if (!this.form.controls['password'].touched)
          return null

      if (this.form.controls['password'].getError('required'))
          return 'Password is required'
      
      return null
  }
  getFormControl():FormControl{
    const locationControl = this.form.get("location") as FormControl<any>;
   return locationControl;
  }
 }
