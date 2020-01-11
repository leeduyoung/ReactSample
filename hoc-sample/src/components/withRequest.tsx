import React from 'react';
import axios from 'axios';

const withRequest = (url: string) => (WrappedComponent: React.ComponentType<any>) => 
{
    return class extends React.Component
    {
        public state = 
        {
            data: null
        };

        public componentDidMount(): void
        {
            this.initialize();
        }

        private async initialize()
        {
            try
            {
                const response = await axios.get(url);
    
                this.setState({
                    data: response.data
                });
            }
            catch (error)
            {
                console.log(error);
            }
        }

        public render(): JSX.Element
        {
            const {data} = this.state;

            if (!data)
                return <div>로딩중</div>;

            return <WrappedComponent {...this.props} data={data} />;
        }    
    }
};

export default withRequest;