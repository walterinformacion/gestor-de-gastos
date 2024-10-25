import swal from 'sweetalert2';
import withReactcontent from 'sweetalert2-react-content';

export function show_alerta(mensaje,icono,foco){
    onfocus(foco);
    const MySwal = withReactcontent(swal);
    MySwal.fire({
        title:mensaje,
        icon:icono
    })
}

function onfocus(foco){
    if (foco != ''){
        document.getElementById(foco).focus();
    }
}