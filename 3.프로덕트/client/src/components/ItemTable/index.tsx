interface ItemTableProps {
    children: any,
}

const ItemTable = (props: ItemTableProps) => {
    return(
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    </th>
                    <th>상품명</th>
                    <th>주소</th>
                    <th>배송 일자</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.children}
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th></th>
                    <th>상품명</th>
                    <th>주소</th>
                    <th>배송일자</th>
                    <th></th>
                </tr>
                </tfoot>

            </table>
        </div>
    )

}

export default ItemTable