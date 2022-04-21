import React from 'react'
import { useState } from 'react'
import { Button, FormControl, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function EditProfile() {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birthday, setBirthday] = useState(new Date())
    const [picture, setPicture] = useState()
    const [studyType, setStudyType] = useState("No Preference")
    const [studyLocation, setStudyLocation] = useState("No Preference")
    const [error, setError] = useState("\u00A0")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Stack id="profile-panel" direction="column" alignItems="center">
            <h2>Create/Edit Profile</h2><br />
            <form onSubmit={handleSubmit}>
                <Stack id="profile-form" direction="column" alignItems="center">
                    <TextField id="first" label='First name' required
                        value={first} onChange={e => setFirst(e.target.value)} /><br />
                    <TextField id='last' label='Last name' required
                        value={last} onChange={e => setLast(e.target.value)} /><br />
                    <p>Birthday*</p>
                    <TextField type="date" id="birthday" required
                        value={birthday} onChange={e => setBirthday(e.target.value)} /><br />

                    <h3>Optional Preferences</h3><br />
                    <p>Profile Picture:</p>
                    <input type="file" accept="image/*" multiple="false"
                        value={picture} onChange={e => setPicture(e.target.value)} /><br />
                    <p>Would you prefer studying as a pair or with a group?</p>
                    <select defaultValue= {studyType} name="pairOrGroup" id="pairOrGroup" onChange={e => setStudyType(e.target.textContent)}>
                        <option value="NoPreference">No Preference</option>
                        <option value="Pair">Pair</option>
                        <option value="Group">Group</option>
                    </select>
                    <p>Would you prefer studying in person or online?</p>
                    <select defaultValue= {studyLocation} name="onlineOrInPerson" id="onlineOrInPerson" onChange={e => setStudyLocation(e.target.textContent)}>
                        <option value="NoPreference">No Preference</option>
                        <option value="Online">Online</option>
                        <option value="InPerson">In Person</option>
                    </select><br />

                    <Button id="save-profile" variant="contained" type="submit">Save</Button>
                    <div id="error-message" style={{ color: "red" }}>{error}</div>
                </Stack>
            </form>
        </Stack>
    )
}

export default EditProfile;