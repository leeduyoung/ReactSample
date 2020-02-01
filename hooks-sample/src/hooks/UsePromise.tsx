import {useState, useEffect} from 'react';

/**
 * Custom hook - usePromise
 * promise를 쉽게 사용할 수 있는 custom hook 이다.
 * 
 * @param promiseCreator 
 * @param deps 
 */
export default function usePromise(promiseCreator: () => Promise<any>, deps: [])
{
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);

        try
        {
            const result = await promiseCreator();
            setResolved(result);
        }
        catch (err)
        {
            setError(err);
        }
        
        setLoading(false);
    }
    
    useEffect(() => {
        process();
    }, deps);

    return [loading, resolved, error];
}