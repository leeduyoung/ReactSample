import React, { useState, useEffect } from "react";
import {TextField} from "@material-ui/core";

const Demo = ({data}) => {

    const [name, setName] = useState("");

    console.log('data: ', data)
    // console.log('data.name: ', data.name)

    useEffect(() => {
        if (data)
        {
            setName(data.name)
        }
    }, [data, name, setName])

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

export default Demo;