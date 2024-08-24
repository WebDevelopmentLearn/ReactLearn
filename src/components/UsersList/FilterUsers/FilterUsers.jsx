import {memo} from "react";


export function Filter({onChange}) {
    console.log('FilterUsers was rerendered');

    return (
        <div>
            <input type="text" onInput={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export const FilterUsers = memo(Filter);