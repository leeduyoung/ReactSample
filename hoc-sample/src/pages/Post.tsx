import React from 'react';
import axios from 'axios';

export class Post extends React.Component
{
    public state = 
    {
        data: null
    };

    public constructor(props: {})
    {
        super(props);
    }

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
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

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