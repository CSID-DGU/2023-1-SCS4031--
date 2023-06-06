const IntroductoryRemark = () => {

    return(
        <div className={"w-full text-right mt-5 flex"}>
            <div className={"w-2/3"}>
                <div className={"flex"}>
                    <div className={"bg-primary w-10 h-2 my-auto mr-5"} />
                    <p className={"font-bold"}>주기사</p>
                </div>
                <div className={"flex"}>
                    <div className={"bg-accent w-10 h-2 my-auto mr-5"} />
                    <p className={"font-bold"}>보조기사</p>
                </div>
            </div>
            <button className={"btn btn-primary w-40"}>옵션</button>
        </div>
    )

}

export default IntroductoryRemark;