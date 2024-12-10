import { ReactNode } from "react";
import { render } from "react-dom";

interface ListProps<T>{
    items: T[],
    render: (item : T) => ReactNode
}

const List = <T,>({items, render}: ListProps) => {
    return (
     <ul>
        {items.map((item, i)=>(
            <li key = {i}>
              {render(item)}
            </li>
        ))}
     </ul>
    )
}

export default List;