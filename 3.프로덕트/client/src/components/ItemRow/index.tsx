interface ItemRowProps {
    itemName: string,
    mainAddress: string,
    delivery_state: boolean;
}

const ItemRow = (props: ItemRowProps) => {
    return(
        <tr>
            <th className={"text-center"}>
                <input type="checkbox" checked={props.delivery_state} className="checkbox  checkbox-primary" />
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold w-[80px] overflow-hidden text-ellipsis">{props.itemName}</div>
                    </div>
                </div>
            </td>
            <td>
                {props.mainAddress}
            </td>
        </tr>
    )
}

export default ItemRow