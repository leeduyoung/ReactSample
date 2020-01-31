import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    /**
     * useEffect 함수는 렌더링 직후 작업을 수행한다.
     * componentDidMount, componentDidUpdate 등 생명주기를 합친 형태와 같다.
     * 
     * 1회만 마운트되고 싶을 경우(=componentDidMount)에는
     * useEffect 함수의 두 번째 파라미터에 빈 배열을 넣어주면 된다.
     */
    // componentDidUpdate 형태
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다!');

    //     console.log({name, nickname});
    // });

    /**
     * componentDidUpdate 형태 2 - 특정 값을 검사하고 싶은 경우 
     * props로 전달받은 값 또는 useState를 통해 관리하고 있는 상태를 넣어줘도 된다.
     * 
     * class component 일 경우
     * `
     *      componentDidUpdate(prevProps, prevState) {
     *          if (prevProps.value !== this.props.value)
     *              doSomething();
     *      }
     * `
     */
    // 
    useEffect(() => {
        console.log({ name, nickname });

        /**
         * 컴포넌트가 언마운트 되기 전 또는 업데이트 되기 전에 불리는 
         * 콜백 함수를 작성할 수 있다.
         * 
         * 언마운트시에만 콜백 함수가 호출되고 싶다면,
         * useEffect 함수의 두 번째 파라미터에 빈 배열을 입력하면 된다.
         */
        return () => {
            console.log('component unmount');
        }
    }, [name])

    // componentDidMount 형태
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다!');

    //     console.log({name, nickname});
    // }, []);    



    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;