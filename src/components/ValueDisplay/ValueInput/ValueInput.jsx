import {useEffect, useRef} from "react";

export function ValueInput({value}) {
    const prevValueRef = useRef(value);
    useEffect(() => {
        if (prevValueRef.current) {
            if (value === "") {
                // console.log("Empty");
                prevValueRef.current = "Empty";
            } else {
                // console.log("Not empty");
                prevValueRef.current = value;
            }

        }

    }, [value]);
    console.log("ValueInput rendered");
    return (
        <div>
            <p>Current value: {value}</p>
            <p>Previous value: {prevValueRef.current}</p>
        </div>
    );
}