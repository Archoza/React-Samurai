import React from "react";
import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
                <div className={classes.descriptionBlock}>ava + desc</div>
            </div>
        </div>
    );
}

export default ProfileInfo;