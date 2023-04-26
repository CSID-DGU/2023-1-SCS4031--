import {Outlet} from "react-router-dom";

interface ContentCardProps {
    cardName: string,
    children: string
}
const ContentCard = ({cardName, children}: ContentCardProps) => {
    return(
        <div className={`card h-full w-full bg-primary shadow-xl text-white`}>
            <div className={'card-body'}>
                <div className={'card-title'}>
                    {cardName}
                </div>
                    <div className={'flex items-center h-full'}>
                        <p>{children}</p>
                    </div>
            </div>
        </div>
    )

}



export default ContentCard;