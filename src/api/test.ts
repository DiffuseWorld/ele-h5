import instance from "./base";

export const fetchTest = () =>{
    return instance.get('test')
}