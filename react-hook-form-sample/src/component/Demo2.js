import React, { useState, useEffect } from "react";
import {TextField} from "@material-ui/core";

const Demo2 = ({value}) => {

    const [name, setName] = useState("");

    console.log('value: ', value)
    // console.log('data.name: ', data.name)

    useEffect(() => {
        if (value)
        {
            setName(value)
        }
    }, [value, setName])

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    console.log(name)
    return (
        <div>
            <form>
                <TextField 
                    id="name"
                    label="name"
                    defaultValue={name}
                    onChange={handleChangeName}
                />
            </form>
        </div>
    )
};

export default Demo2;