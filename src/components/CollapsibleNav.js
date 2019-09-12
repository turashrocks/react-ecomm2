import React, { Component } from 'react'
import PropTypes from 'prop-types'

var removeMargin = {
    marginBlockStart: '0px',
    marginBlockend: '0px',
    paddingInlineStart: '0px'
  }

class CollapsibleNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleNavToggle(e){
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        });
        console.log(this.refs.inner.clientHeight);
    }

    render() {
        const {title, children} = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        return (
            <li  className={`vt-panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleNavToggle(e)}>
                <span className="vt-panel-heading">{title}</span>
                    <div className="arrow-right">
                        <i className="fa fa-angle-right custom" ></i>
                    </div>
                <ul className="vt-panel-collapse" style={{height: currentHeight +'px' }}>
                    <div className="vt-panel-body" ref="inner">
                    {children}
                    </div>
                </ul>
            </li>
        )
    }
}

CollapsibleNav.propTypes = {
    title: PropTypes.string
};


export default CollapsibleNav