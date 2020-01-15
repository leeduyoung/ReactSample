import { Memo } from "../models";

let store: Memo[] = [
    { id: 2, content: "두번째 메모입니다.", createdAt: Date.now() },
    { id: 1, content: "첫번재 메모입니다.", createdAt: Date.now() - 1 }
];

// 삭제되지 않은 모든 메모 조회하기
export const fetchMemoList = () =>
    store
        .filter(memo => !memo.deleted)
        .sort((a, b) => b.createdAt! - a.createdAt!);

// 삭제된 모든 메모 조회하기
export const fetchDeletedMemoList = () =>
    store
        .filter(memo => !!memo.deleted) // memo.deleted === true
        .sort((a, b) => b.createdAt! - a.createdAt!);

// 특정 id에 해당되는 메모 정보만 가져오기
export const fetchMemo = (memoId: number) => store.find(m => m.id === memoId);

// 스토어에 마지막 메모 id보다 1증가시킨 값을 id로 하여 새로운 메모를 저장한다.
export const addMemo = (memo: Memo) => {
    const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
    memo.id = lastMemo ? lastMemo.id! + 1 : 1;
    memo.createdAt = Date.now();
    store = [memo, ...store];
    return memo;
};

// 스토어에서 특정 ID의 메모 삭제
export const deleteMemo = (memoId: number) => {
    store = store.map(memo => ({
        ...memo,
        deleted: memo.id === memoId ? true : memo.deleted
    }));
};

// 삭제된 메모를 복구한다
export const resotreMemo = (memoId: number) => {
    store = store.map(memo => ({
        ...memo,
        deleted: memo.id === memoId ? false : memo.deleted
    }));
};
