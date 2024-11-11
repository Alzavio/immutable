import React, {useState} from 'react';

function UserProfile(props) {
    const [userProfile, updateUserProfile] = useState({
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
                    onChange={(e) => updateUserProfile(userProfile => ({
                        ...userProfile, name: e.target.value
                    }))}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Phone"
                    value={userProfile.contactDetails.phone}
                    onChange={(e) => updateUserProfile(prevProfile => ({
                        ...prevProfile,
                        contactDetails: {
                            ...prevProfile.contactDetails,
                            phone: e.target.value
                        }
                    }))}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Address"
                    value={userProfile.contactDetails.address}
                    onChange={(e) => updateUserProfile(prevProfile => ({
                        ...prevProfile,
                        contactDetails: {
                            ...prevProfile.contactDetails,
                            address: e.target.value
                        }
                    }))}
                />
            </div>
            <div>
                <button onClick={() => updateUserProfile(prevProfile => ({
                    ...prevProfile,
                    preferences: {
                        ...userProfile.preferences,
                        newsletter: !prevProfile.preferences.newsletter
                    }
                }))}>
                    {userProfile.preferences.newsletter ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </div>
        </div>
    );
}

export default UserProfile;