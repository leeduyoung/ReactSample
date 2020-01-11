import React from 'react';
import withRequest from "../components/withRequest";

interface PostIProps
{
    data: string;
};

class Post extends React.Component<PostIProps>
{
    public render(): JSX.Element
    {
        const {data} = this.props;

        return (
            <div>
                {JSON.stringify(data)}
            </div>
        )
    }
}

export default withRequest('https://jsonplaceholder.typicode.com/posts/1')(Post);