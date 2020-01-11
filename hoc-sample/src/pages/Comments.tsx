import React from 'react';
import axios from 'axios';

export class Comments extends React.Component
{
    public state = 
    {
        data: null
    };

    public componentDidMount(): void
    {
        this.initialize();
    }

    public render(): JSX.Element
    {
        const {data} = this.state;

        if (!data)
            return <div>로딩중</div>;

        return (
            <div>
                {JSON.stringify(data)}
            </div>
        )
    }

    private async initialize(): Promise<void>
    {
        try
        {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');

            this.setState({
                data: response.data
            });
        }
        catch (error)
        {
            console.log(error);
        }
    }    
}