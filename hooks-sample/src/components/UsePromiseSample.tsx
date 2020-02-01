import React from 'react';
import usePromise from '../hooks/UsePromise';

const wait = () => {
    // 3초 후에 끝나는 프로미스 반환
    return new Promise(resolve => {
        setTimeout(() => resolve('Hello custom hooks!'), 3000);
    });
}

const UsePromiseSample = () => {

    const [loading, resolved, error] = usePromise(wait, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러 발생</div>;
    if (!resolved) return null;

    return <div>{resolved}</div>;
}   

export default UsePromiseSample;