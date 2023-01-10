import { Validators } from '@angular/forms';

export const validador = Validators.compose([
  Validators.required,
  Validators.minLength(2)
]);