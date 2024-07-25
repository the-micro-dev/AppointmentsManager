import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './page1.css'
import { Page1Tab1 } from './page1tab1/page1tab1'
import { Page1Tab2 } from './page1tab2/page1tab2'

const Page1 = () => {
    const [activeTab, setActiveTab] = useState('subcontent1'); // Local state to manage active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div class="page1">
            <h4>Page 1 Content</h4>
            <div className="sub-navbar">
                <button onClick={() => handleTabChange('subcontent1')} className={activeTab === 'subcontent1' ? 'active-link' : ''}>Subcontent 1</button>
                <button onClick={() => handleTabChange('subcontent2')} className={activeTab === 'subcontent2' ? 'active-link' : ''}>Subcontent 2</button>
                <button>Subcontent 3</button>
                <button>Subcontent 4</button>
                <button>Subontent 5</button>
            </div>
            <div className="subcontent">
                {activeTab === 'subcontent1' && <Page1Tab1 />}
                {activeTab === 'subcontent2' && <Page1Tab2 />}
            </div>
        </div>
    );
}

export default Page1;