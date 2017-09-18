import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static isValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    if (control.value !== '1234') {
                        resolve({
                            isValid: true
                        });
                    } else {
                        resolve(null);
                    }
                }, 2000);
            });
    }
}
