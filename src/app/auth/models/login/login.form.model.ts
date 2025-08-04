import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthModel } from "../auth.model";

export class LoginFormModel {
    form: FormGroup
    constructor();
    constructor(obj: AuthModel);
    constructor(obj?: AuthModel) {
        this.form = new FormGroup({
            mobile_no: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
            password: new FormControl('', [Validators.required]),
            remember_me: new FormControl('', [])
        });

        if (obj) {
            this.form.patchValue({
                mobile_no: obj.mobile_no,
                password: obj.password,
                remember_me: obj.remember_me,
            });
        }
    }
  

    is_valid(/* required param here */): boolean {
        // validate from here and  get validation messages
        return this.form.valid
    }

    get_value(): AuthModel {
        // return value model
        return {
            mobile_no: this.form.value.mobile_no,
            password: this.form.value.password,
            remember_me: this.form.value.remember_me
        }
    }

    /**
     * Get user name error message
     */
    public get username_error():string | null {
        if (!this.form.controls['mobile_no'].touched)
            return null

        if (this.form.controls['mobile_no'].getError('required'))
            return 'Username is required'

          

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
    

}