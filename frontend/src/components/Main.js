import React from "react";
import { Link } from "react-router-dom";
import "./Main.css"; 

const MainPage = () => {
    return (
        <div className="main-page-container">
            <div className="content-container">
                <header>
                    <h1>Welcome to JobHub</h1>
                    <p>Your one-stop destination for job hiring and search</p>
                </header>
                <div className="button-container">
                    <Link to="/post-jobs" className="custom-link">
                        <button className="custom-button">Hire</button>
                    </Link>
                    <Link to="/find-jobs" className="custom-link">
                        <button className="custom-button">Get Jobs</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
