import { CanDeactivateFn } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

export const deactivateGuard: CanDeactivateFn<unknown> = async (
  component: any,
  currentRoute,
  currentState,
  nextState
) => {
  let next = true;

  if (component && component.iniciarFormulario) {
    const form: FormGroup = component.iniciarFormulario();

    if (form.invalid) {
      await Swal.fire({
        title: 'Se perdera tu informacion si abandonas la pagina. ¿Desea salir sin guardar los cambios?',
        showDenyButton: true,
        confirmButtonText: 'Sí, salir',
        denyButtonText: 'Quedarse',
        icon: 'warning'
      }).then((result) => {
        if (result.isConfirmed) {
          next = true;
        } else if (result.isDenied) {
          next = false;
        }
      });
    }
  }

  return next;
};
