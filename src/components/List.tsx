import React, {FC, ReactNode} from 'react';


interface ListProps<T> {
    items: T[],
    renderItem: (item: T) => ReactNode
}

const List:<T>(props:ListProps<T>)=>JSX.Element = ({items,renderItem}) => {
    return (
        <div>
            {items.map(renderItem)}
        </div>
    );
};

export default List;