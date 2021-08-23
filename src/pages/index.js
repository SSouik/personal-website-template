import React from 'react';
import { Banner, Experience, Skillbar } from '../components';

export default function Home() {
    return (
        <div>
            <Banner/>
            <div className='row mt-5'>
                <div id='experience' className='col-md-6 p-5 text-center'>
                    <h2>Experience</h2>
                    <hr/>
                    <Experience
                        company='Company 1, Inc.'
                        datesWorked='May 2021 - Present'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum
                    </Experience>
                    <Experience
                        company='Company 2'
                        datesWorked='September 2015 - April 2021'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum
                    </Experience>
                </div>
                <div id='skills' className='col-md-6 p-5 text-center'>
                    <h2>Skills</h2>
                    <hr/>
                    <Skillbar label='Skill 1' percentage='80%'/>
                    <Skillbar label='Skill 2' percentage='45%'/>
                    <Skillbar label='Skill 3' percentage='30%'/>
                    <Skillbar label='Skill 4' percentage='90%'/>
                    <Skillbar label='Skill 5' percentage='60%'/>
                </div>
            </div>
        </div>
    )
}
