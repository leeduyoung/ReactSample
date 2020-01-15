import React from 'react';

const withSplitting = getComponent => 
{
    return class withSplitting extends React.Component
    {
        public state = 
        {
            Splitted: null
        };

        public constructor(props: {})
        {
            super(props);

            getComponent().then(({default: Splitted}) => {
                this.setState({
                    Splitted
                });
            });
        }

        public render(): JSX.Element
        {
            const {Splitted} = this.state;

            if (!Splitted)
                return <div>로딩중</div>;

            return <Splitted {...this.props} />;
        }
    }    
};

export default withSplitting;