import React from 'react';

const JavaScript = () => {
    let handleLoad = () => {
        // alert('Image fully loaded');
    }
    return (
        <div>
            <img 
                onLoad={handleLoad}
                src="https://images.unsplash.com/photo-1566912924576-77dcb9b0315d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
        </div>
    );
}

export default JavaScript;
