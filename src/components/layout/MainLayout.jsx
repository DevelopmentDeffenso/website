import { Outlet } from 'react-router-dom';
import CursorBlob from '../ui/CursorBlob';

export default function MainLayout() {
    return (
        <>
            <CursorBlob />
            <Outlet />
        </>
    );
}
