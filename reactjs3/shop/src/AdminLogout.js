import { useCookies } from "react-cookie";

export default function AdminLogout(){

    const [cookies , setCookie, removeCookie] = useCookies(['user']);
    removeCookie('userid');
    alert('Logout Successfull');
    window.location = '/';
}
