import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { BeatLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class AwesomeComponent extends React.Component {
    state = {
        loading: true
    }
    render() {
        return (
            <div style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                height: this.props.h
            }}>
                <div className='sweet-loading'>
                    <BeatLoader
                        css={override}
                        sizeUnit={"px"}
                        size={15}
                        color={'#000000'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}