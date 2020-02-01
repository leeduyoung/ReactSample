import React, { useReducer } from 'react';

const initialState: IState = 
{
    value: 0,
};

interface IState
{
    value: number;
};

function reducer(state: IState, action: any) 
{
    switch(action.type) 
    {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const ReducerCounter = () => 
{
    /**
     * useReducer Hook의 장점은
     * 다수의 하윗값을 포함한ㄴ 복잡한 정적 로직을 만들거나
     * 다음 state가 이전 state에 의존적인 경우 선호된다.
     */
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>        
    )
}

export default ReducerCounter;