import { useCookies } from 'react-cookie';

export default function IsLogin(){

    const [cookies , setCookie] = useCookies(['user']);
    if(cookies.userid === undefined)
    {
        alert('please Login');
        window.location = '/';
    }

}