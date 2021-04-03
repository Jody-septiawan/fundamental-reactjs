function List() {
    const list = [3, 7, 45, 3, 34, 6, 7, 9, 10];

    return (
        <ul>
            {list.map((item, index) =>
                <li key={index}>{item}</li>
            )}
        </ul>
    );
}

export default List;
