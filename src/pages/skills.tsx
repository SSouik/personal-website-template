import React, { Component } from 'react';
import { Skill, Skillbar, Seo, Reference } from '../components';
import Page from '../layouts/Page';

class Skills extends Component {
    public render = (): JSX.Element => (
        <Page>
            <Seo 
                title='Skills' 
                description='Skill description'
            />
            <div id='skills'>
                <div className='col-md-12 skills-header'>
                    <div className='section-header mb-3'>
                        <h1 className='bg-header'>EXPERIENCE</h1>
                        <h3 className='fg-header'>Skills</h3>
                    </div>
                </div>
                <div className='skills-body'>
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <Skill
                                title='Problem Solving'
                                years='5+'
                                img='fa fa-check'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Skill>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <Skill
                                title='Graphic Design'
                                years='3+'
                                img='fa fa-image'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Skill>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <Skill
                                title='Photoshop'
                                years='3+'
                                img='fa fa-edit'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Skill>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <Skill
                                title='HTML/CSS'
                                years='1+'
                                img='fa fa-code'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Skill>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'/>
                    <div className='col-md-6 p-5 text-center'>
                        <h2 className='section-header'>Skills</h2>
                        <hr/>
                        
                        <Skillbar label='Photoshop' percentage='65%'/>
                        <Skillbar label='HTML/CSS' percentage='30%'/>
                        <Skillbar label='Skill 1' percentage='60%'/>
                        <Skillbar label='Skill 2' percentage='55%'/>
                        <Skillbar label='Skill 3' percentage='70%'/>
                    </div>
                    <div className='col-md-3'/>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Reference
                            name='John Doe'
                            location='Fake Company, LLC'
                            quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        />
                    </div>
                    <div className='col-md-6'>
                        <Reference
                            name='John Doe'
                            location='Fake Company, LLC'
                            quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        />
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Skills;
