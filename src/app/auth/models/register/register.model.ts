import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthModel } from "../auth.model";




export class RegisterModel { 
    form: FormGroup
    constructor(obj?: AuthModel) {
        this.form = new FormGroup({
            // username: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
            // password: new FormControl('', [Validators.required]),
            // remember_me: new FormControl('', [])
        });
    }
}
