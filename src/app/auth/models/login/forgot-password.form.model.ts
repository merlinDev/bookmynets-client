import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthModel } from "../auth.model";

export class ForgotPasswordFormModel {
    form: FormGroup

    constructor() {
        this.form = new FormGroup({
            mobile_no: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
           
        })
    }

    is_valid(/* required param here */): boolean {
        // validate from here and  get validation messages
        return this.form.valid
    }

    get_value(): any {
        // return value model
        return {
            registered_email: this.form.value.username
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

            if (this.form.controls['mobile_no'].getError('email'))
            return 'Username should be a email'

        return null
    }

  
}