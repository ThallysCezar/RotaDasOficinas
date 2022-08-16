import React from "react";
import Navbar from './../../shared/components/Navbar';

const Todos = () => {
    const aumentarStyle = {
        width: '50%'
    };


    return (
        <div>
            <Navbar/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-lg">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-xl">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="mt-4">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={aumentarStyle}>50%</div>
                    </div>
                    <div className="row g-2">
                        <button type="button" className="btn btn-outline-success mt-4">Continue</button>
                        <button type="button" className="btn btn-outline-danger mt-4">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos;