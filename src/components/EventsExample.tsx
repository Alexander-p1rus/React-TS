import React, {ChangeEvent, FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [count, setCount] = useState<number>(0)
    const [isDrag,setIsDrag]=useState<boolean>(false)
    const inputRef=useRef<HTMLInputElement>(null)


    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler=(e:React.DragEvent<HTMLDivElement>)=>{
        console.log(e.clientY);
    }

    const dropHandler=(e:React.DragEvent<HTMLDivElement>)=>{
        setIsDrag(false)
    }

    const leaveHandler=(e:React.DragEvent<HTMLDivElement>)=>{
        setIsDrag(false)
    }

    const dragWithPreventHandler=(e:React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div style={{marginBottom: 30}}>
            <input ref={inputRef} type="text" placeholder={'не управляемый'}/>
            <input value={value} onChange={inputHandler} type="text" placeholder={'управляемый'}/>
            <button onClick={buttonHandler}>Столько раз нажали {count}</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{width:200,
                    height:200,
                    marginBottom:20,
                    background:'red'
            }
            }
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width:200,height:200,background:isDrag?'blue':'red',
                }}>
            </div>
        </div>
    );
};

export default EventsExample