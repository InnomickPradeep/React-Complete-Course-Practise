import React from 'react'

export default function ConditionalRendering() {
    return (
        <div>
            
            {
                (() => {

                    if(true){
                        return <div>
                            <h1>if Statement Executed</h1>
                        </div>
                    }
                    else{
                        return <div>
                            <h1>else Statement Executed</h1>
                        </div>
                    }

                })()
            }

        </div>
    )
}
