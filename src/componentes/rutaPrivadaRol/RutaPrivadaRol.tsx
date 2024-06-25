import { Navigate, Outlet } from 'react-router-dom';
import { Rol } from '../../entidades/enums/Rol';
import { useEmpleado } from '../../hooks/useEmpleado';
import LoaderPage from '../loaderPage/LoaderPage';

function RolUsuario({ rol }: { rol:Rol }) {
    const { empleado } = useEmpleado();

    if((empleado)){
        if (empleado.rol === rol) {
            return <Outlet />;
        }else {
            return <Navigate replace to='' />;
        }
    } else {
        return <LoaderPage />
    }
        
    
}
export default RolUsuario;