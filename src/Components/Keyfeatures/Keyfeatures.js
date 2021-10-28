import React from 'react';
import Card from './Cards';
import Styles from './Keyfeatures.module.css'
const Keyfeatures = () => {
    return (
        <React.Fragment>
            <div>
                <h1 className={Styles.ftrs}>Key features</h1>
                <div className={Styles.Box}>
                    <Card
                        id={1}
                        name={'Incubation'}
                        content={'about..'}
                        to={'#inc'}
                    />
                    <Card
                        id={2}
                        image={'src..'}
                        name={'Mentorship'}
                        content={'about..'}
                        to={'#ment'}
                    />
                    <Card
                        id={3}
                        image={'src..'}
                        name={'Fund Raising'}
                        content={'about..'}
                        to={'#fnd'}
                    />
                    <Card
                        id={4}
                        image={'src..'}
                        name={'Webinar Sessions'}
                        content={'about..'}
                        to={'/'}
                    />
                </div>

                
            </div>
        </React.Fragment>
    );
}

export default Keyfeatures;