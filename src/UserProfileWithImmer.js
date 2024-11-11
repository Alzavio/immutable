import {useImmer} from "use-immer";

import React from 'react';

function UserProfileWithImmer(props) {
    const [userProfile, updateUserProfile] = useImmer({
        name: '',
        email: '',
        contactDetails: {
            phone: '',
            address: ''
        },
        preferences: {
            newsletter: false,
            notifications: true
        }
    });



    return (
        <div>

            <div>
                <input
                    type="text"
                    value={userProfile.name}
                    placeholder="Your Name"
                    onChange={(e) => updateUserProfile(draft => {draft.name = e.target.value})}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Phone"
                    value={userProfile.contactDetails.phone}
                    onChange={(e) => updateUserProfile(draft => { draft.contactDetails.phone = e.target.value })}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Address"
                    value={userProfile.contactDetails.address}
                    onChange={(e) => updateUserProfile(draft => { draft.contactDetails.address = e.target.value }) }
                />
            </div>
            <div>
                <button onClick={() => updateUserProfile(draft => { draft.preferences.newsletter = !draft.preferences.newsletter })}>
                    {userProfile.preferences.newsletter ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </div>
        </div>
        );
    }

    export default UserProfileWithImmer;