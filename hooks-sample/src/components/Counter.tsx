import React, { useState } from 'react';

const Counter = () => {
    /**
     * 배열의 비구조화 할당으로 된 hook
     * useState hook은 파라미터에 상태의 기본값을 넣어준다.
     * useState 함수가 호출되면 반환 값으로 배열을 반환하는데,
     * 첫 번째 원소는 상태값, 
     * 두 번째 원소는 상태값을 설정하는 함수이다.
     * 따라서, 두 번째 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 상태값이 바뀌는 것이다.
     */
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Counter;