import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers: number[]) => {
    console.log("평균값 계산 중..");

    if (numbers.length === 0)
        return 0;

    const sum = numbers.reduce((a, b) => a+b);
    return sum / numbers.length;
}

/**
 * useMemo
 * - 숫자, 문자열, 객체 처럼 일반 값을 재사용할때 사용한다.
 * 
 * useCallback
 * - 함수를 재사용할때 사용한다.
 */
const Average = () => {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState('');
    const inputElement = useRef<HTMLInputElement>(null);

    // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setNumber(event.target.value);
    // };

    // const onInsert = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const newList: number[] = list.concat(parseInt(number));
    //     setList(newList);
    //     setNumber('');
    // };

    /**
     * useCallback Hook을 사용하면
     * 컴포넌트가 리렌더링 될때마다 새롭게 함수가 생성되는 것을 막아 성능 최적화에 도움을 준다.
     * 
     * ! 함수 내부에서 기존의 상태 값을 의졶래야 할 경우 반드시 두 번째 파라미터 안에 
     * 값이 포함되어 있어야 한다.
     * - onChange의 경우 기존 값의 조회는 필요하지 않고 설정만 하므로 빈 배열로 처리한다.
     * - onInsert의 경우 number, list의 기존 값 조회가 필요하므로 파라미터에 추가한다.
     */
    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {

        let value = event.target.value;
        if (value === "" || !parseInt(value))
            return;

        setNumber(value);
    }, []);

    const onInsert = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (number === "")
            return;

        const newList: number[] = list.concat(parseInt(number));
        setList(newList);
        setNumber('');

        // 등록 버튼을 눌렀을 경우 input 영역으로 포커스를 이동
        inputElement.current?.focus();

    }, [number, list]);

    // useMemo Hook을 사용하여 list의 변경이 있을때만 getAverage 함수가 동작하도록 한다.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="text" value={number} 
                onChange={onChange}
                ref={inputElement} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value: number, index: number) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* 
                    input 값이 변경될 때마다 getAverage가 새로 계산되므로 낭비! 
                    이럴때 useMemo Hook을 사용한다. (위의 useMemo 코드 참조)
                */}
                {/* <b>평균 값:</b> {getAverage(list)} */}
                <b>평균 값:</b> {avg}
            </div>
        </div>
    )
}

export default Average;