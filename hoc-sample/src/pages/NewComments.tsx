import React from 'react';
import withRequest from "../components/withRequest";

interface CommentsIProps
{
    data: string;
};

class Comments extends React.Component<CommentsIProps>
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

export default withRequest('https://jsonplaceholder.typicode.com/comments?postId=1')(Comments);