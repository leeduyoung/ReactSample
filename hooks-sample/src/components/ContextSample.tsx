import React, { createContext, useContext } from 'react';

/**
 * context는 React 컴포넌트 트리 안에서 전역적(global)이라고 
 * 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법이다.
 * 
 * ex. 현재 로그인한 유저, 테마 등..
 */
const ThemeContext = createContext('black');

const ContextSample = () => {

    const theme = useContext(ThemeContext);
    const style = 
    {
        width: '24px',
        height: '24px',
        background: theme
    };

    return <div style={style}></div>;
}

export default ContextSample;