import { useState } from "react";
import { LoggingComponentTemplate } from "./Logging/LoggingComponent";
const App =() => <div><h1>My First App</h1></div>
export const Reactions = (props:any) => {
  const [likes,setLikes] = useState(0);
  const [dislike,setDisLikes]= useState(0);
  const [love,setLove] = useState(0);

return (
  <div><h1>{props.title}</h1>

    <button hidden={!props.showLikes} onClick={()=>{setLikes(likes+1)}} >👍{likes}</button>
  <button hidden={!props.showDislikes} onClick={()=>{setDisLikes(dislike+1)}}>👎{dislike}</button>
  <button hidden={!props.showLove} onClick={(()=>{setLove(love+1)})}>❤️{love}</button>
  </div>
)

};

export default App;