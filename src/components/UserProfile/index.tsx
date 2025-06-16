interface UserProFileProps  {
    name: string;
    age: number;
    isSubscribed: boolean;
}

const userProFile: React.FC<UserProFileProps> = ({name,age,isSubscribed})=>{
    return (
        <div>
            <div>名称：{name}</div>
            <div>年龄：{age}</div>
            <div>是否订阅：{isSubscribed ? "是" : "否" }</div>
        </div>

    )
}

export default userProFile;