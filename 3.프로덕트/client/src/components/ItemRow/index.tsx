interface ItemRowProps {
    itemName: string,
    itemCategory: string,
    mainAddress: string,
    subAddress: string,
    date: string,
}

const ItemRow = (props: ItemRowProps) => {
    return(
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold w-[80px] overflow-hidden text-ellipsis">{props.itemName}</div>
                        <div className="text-sm opacity-50">{props.itemCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {props.mainAddress}
                <br/>
                <span className="badge badge-ghost badge-sm">{props.subAddress}</span>
            </td>
            <td>{props.date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}

export default ItemRow