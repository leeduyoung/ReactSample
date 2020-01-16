import { Memo } from "../../models/memo";

// =====================================
//      ACTION TYPE'S
// =====================================
export const FETCH_MEMO_LIST = 'FETCH_MEMO_LIST';
export const FETCH_MEMO = 'FETCH_MEMO';
export const FETCH_DELETED_MEMO = 'FETCH_DELETED_MEMO';
export const FETCH_DELETED_MEMO_LIST = 'FETCH_DELETED_MEMO_LIST';
export const ADD_MEMO = 'ADD_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';
export const RESTORE_MEMO = 'RESTORE_MEMO';


// =====================================
//      ACTION CREATOR'S
// =====================================

// 1. 삭제되지 않은 모든 메모 조회하기
export interface IFetchMemoListAction 
{
    type: typeof FETCH_MEMO_LIST;
    payload: Memo[];
};
export function fetchMemoList(memos: Memo[]): IFetchMemoListAction
{
    return {
        type: FETCH_MEMO_LIST,
        payload: memos
    }
};

// 2. 특정 id에 해당되는 메모 정보만 조회
export interface IFetchMemoAction 
{
    type: typeof FETCH_MEMO;
    payload: Memo;
};
export function fetchMemo(memo: Memo): IFetchMemoAction
{
    return {
        type: FETCH_MEMO,
        payload: memo
    }
};

// 3. 특정 id에 해당하는 삭제된 메모 조회
export interface IFetchDeletedMemoAction
{
    type: typeof FETCH_DELETED_MEMO;
    payload: Memo;
};
export function fetchDeletedMemo(memo: Memo): IFetchDeletedMemoAction
{
    return {
        type: FETCH_DELETED_MEMO,
        payload: memo
    }
};

// 4. 삭제된 메모 모두 조회
export interface IFetchDeletedMemoListAction
{
    type: typeof FETCH_DELETED_MEMO_LIST;
    payload: Memo[];
};
export function fetchDeletedMemoList(memos: Memo[]): IFetchDeletedMemoListAction
{
    return {
        type: FETCH_DELETED_MEMO_LIST,
        payload: memos
    }
};

// 5. 마지막 메모 id보다 1증가시킨 값을 id로 하여 새로운 메모를 저장한다.
export interface IAddMemoAction
{
    type: typeof ADD_MEMO;
    payload: Memo;
};
export function addMemo(memo: Memo): IAddMemoAction
{
    return {
        type: ADD_MEMO,
        payload: memo
    }
};

// 6. 특정 id 메모 삭제
export interface IDeleteMemoAction
{
    type: typeof DELETE_MEMO;
    payload: number;
};
export function deleteMemo(id: number): IDeleteMemoAction
{
    return {
        type: DELETE_MEMO,
        payload: id
    }
};

// 7. 삭제 된 특정 id의 메모 복구
export interface IRestoreMemoAction
{
    type: typeof RESTORE_MEMO;
    payload: number;
};
export function resotreMemo(id: number): IRestoreMemoAction
{
    return {
        type: RESTORE_MEMO,
        payload: id
    }
};

export type MemoActionTypes = IFetchMemoListAction
    | IFetchMemoAction
    | IFetchDeletedMemoAction
    | IFetchDeletedMemoListAction
    | IAddMemoAction
    | IDeleteMemoAction
    | IRestoreMemoAction;