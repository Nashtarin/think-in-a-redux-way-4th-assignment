import { loaded, titlechanged } from "../actions";

const titleChanging = (id,todotext)=>{
     return async (dispatch) => {
    const response = await fetch(`https://lws-server-n.herokuapp.com/todos/${id}`,{
        method:'Patch',
        body:JSON.stringify({
            text:todotext

        }),
        headers:{
            "Content-type":"application/json"
        }
    });
    const todo = await response.json();

    dispatch(titlechanged(todo.id,todo.text));
};
}
export default titleChanging;
