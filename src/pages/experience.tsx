import React, { Component } from 'react';
import { Experience, Seo } from '../components';
import Page from '../layouts/Page';

class ExperiencePage extends Component {
    public render = (): JSX.Element => (
        <Page>
            <Seo 
                title='Job Experience' 
                description='Job Experience Description'
            />
            <h1 className='text-center'>Job Experience</h1>
            <hr/>
            <Experience
                company='Fake Company, LLC'
                jobTitle='Job Title'
                datesWorked='June 2021 - present'
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Experience>
            <Experience
                company='Fake Company, Inc'
                jobTitle='Job Title'
                datesWorked='Sept 2015 - June 2021'
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Experience>
            <Experience
                company='Fake Company, LLC'
                jobTitle='Job Title'
                datesWorked='Jan 2013 - Sept 2015'
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Experience>
        </Page>
    )
}

export default ExperiencePage;
