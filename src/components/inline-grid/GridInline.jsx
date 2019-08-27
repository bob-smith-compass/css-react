import React from 'react';
import Child from '../child/Child';

const GridInline = () => {
    return (
        <div>
            
      <div className="mgrid-inline" style={{border: 'solid 1px red'}}>
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <button className="btn btn-primary">Button</button>
      </div>
        </div>
    );
}

export default GridInline;
