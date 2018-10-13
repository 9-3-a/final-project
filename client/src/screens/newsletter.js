import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Newsletter extends Component {

    render() {
        return(
            
            <div class="news">
                <h1>Newsletter</h1>
                <h2>How to politely pour yourself more wine at a dinner party</h2>
                    <p>
                        You're at a friend's house for dinner, there's an open bottle of wine on the table, and your glass is nearly empty.  You'd love to pour yourself a little more wine, but are unsure how to avoid looking like a lush.  You also don't want to appear to be hogging all of the wine.
                        <br/>
                        Here's the game plan to ensure you look like a rockstar dinner guest:
                        <br/>
                        Pick of up the bottle, scan the table and see if anyone else needs a refill.  Never EVER pour yourself more first!  Before pouring yourself more wine, first pour more for those who are sitting close to you.  Then after giving everyone around you a little more, you can reward yourself with more wine.
                        <br/>
                        Use this strategy and you'll ensure that you'll always be invited back!
                    </p>
                    
            </div>

            );
        }
    }

export default Newsletter;
