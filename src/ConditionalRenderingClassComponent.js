import React, { Component } from 'react'

export default class ConditionalRenderingClassComponent extends Component {
    render() {
        return (
            <div>
                
                {
                    (() => {

                        if(true){
                            return <h1>If Statement</h1>
                        }else{
                            return <h1>Else Statement</h1>
                        }

                    })()
                }

            </div>
        )
    }
}
