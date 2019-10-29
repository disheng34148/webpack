import Loadable from 'react-loadable';

const loadingComponent =()=>{
    return null 
}

export default function loadable(path) {
    return Loadable({
        loader: path,// import里面不支持传变量，所以不能封装成 () => import(path)
        loading: loadingComponent
    })
}