import React, {Component} from 'react'

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                name: ""
            }

            this.onNameChange = this.onNameChange.bind(this)
        }

        onNameChange(event) {

            const {name} = this.state
            console.log("prev:name",name)
            this.setState({
                name: event.target.value
            })
            
        }

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }

            return <WrappedComponent {...this.props} {...newProps}/>

        }

    }

}

export default ppHOC