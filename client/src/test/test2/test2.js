export default function Test2(props){
    return (
        <div>
            {props.accounts?.map((account) => {
                return (
                    <div key={account.id}>
                        {account.username}
                    </div>
                )
            })}
        </div>
    )
}