import React from 'react';
import PropTypes from 'prop-types';

export default class PropsDemo extends React.Component{
    render() {
        return(
            <div className="main">
                <div className="mainDiv">
                <p>{this.props.title}</p>
                <p>{this.props.author}</p>
                <p>{this.props.codepenUrl}</p>
                <p>{this.props.date}</p>
                </div>
            </div>
        ) 
    }
}
PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    codepenUrl:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'Generic Creature project',
    author: 'EFA Student',
    codepenLink: 'www.codepen.com',
    date: '01/01/2018',
}
