import React, { PureComponent } from "react"
// import store from '../store'
import { StoreContext } from './context'

export function connect(mapSateToProps, mapDispatchToProps) {
    return function enhanceHOC(WrappedComponent) {
        class EnhanceComponent extends PureComponent {
            constructor(props, context) {
                super(props, context)
                // storeState在这里用不上，只是为了保存起来，后面判断是否更新触发render
                this.state = {
                    storeState: mapSateToProps(context.getState())
                }
            }
            componentDidMount() {
                this.context.subscribe(() => {
                    this.setState({
                        storeState: mapSateToProps(this.context.getState())
                    })
                })
            }
            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        {...mapSateToProps(this.context.getState())}
                        // {...this.state.storeState}
                        {...mapDispatchToProps(this.context.dispatch)}
                    />
                )
            }
        }

        EnhanceComponent.contextType = StoreContext;

        return EnhanceComponent;
    }
}