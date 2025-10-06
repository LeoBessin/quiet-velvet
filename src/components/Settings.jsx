import React, { useState } from 'react';

const Settings = ({ widgetObj, currentState }) => {
    const [showSettings, setShowSettings] = useState(false);

    const style = {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
    }
    const settingsStyle = {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        padding: '0px 10px',
        accentColor: 'var(--main-color)',
        fontSize: '10px'
    }
    const labelStyle = {
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    }

    const getWidgetState = (widgetName) => {
        switch(widgetName) {
            case 'Media':
                return currentState?.showMediaWidget ?? true;
            case 'Google Search':
                return currentState?.showGoogleSearch ?? true;
            case 'Shortcuts':
                return currentState?.showShortcuts ?? true;
            default:
                return true;
        }
    };

    return (
        <div className='logo' style={style}>
            {showSettings ?
                <div style={divStyle}>
                    {widgetObj && widgetObj.map(({ name, changeState }, index) => {
                        const isChecked = getWidgetState(name);
                        return (
                            <div key={`${name}-${index}`} style={settingsStyle}>
                                <input
                                    type="checkbox"
                                    id={`${name}-${index}`}
                                    name={name}
                                    checked={isChecked}
                                    onChange={(e) => changeState(e.target.checked)}
                                />
                                <label htmlFor={`${name}-${index}`} style={labelStyle}>{name}</label>
                            </div>
                        );
                    })}
                </div> : null
            }
            <button className="nf nf-cod-settings_gear settings clean-button"
                    onClick={() => setShowSettings(!showSettings)}>
            </button>
        </div>
    );
};

export default Settings;