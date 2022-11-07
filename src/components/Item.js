import { fetchItem } from "store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Item = () => {

    const token = useSelector(state => state.user.token);
    const task = useSelector(state => state.user.task);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItem(token));
    }, [dispatch]);

    return (
        <>
            {task &&
                <ol>Things to do
                    {task.map((el, key) => {
                        const { id, text } = el;
                        return <li key={id}>{`${text}`}</li>
                    })}
                </ol>
            }
        </>
    )
}

export default Item;