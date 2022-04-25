import React from 'react'
import { useState } from 'react'
import { Button, FormControl, Stack, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import './index.css';

function EditProfile() {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birthday, setBirthday] = useState(new Date())
    const [picture, setPicture] = useState()
    // const [studyType, setStudyType] = useState("No Preference")
    // const [studyLocation, setStudyLocation] = useState("No Preference")
    const [error, setError] = useState("\u00A0")
    const [av, setAv] = useState([])
    const [clas, setClas] = useState([])
    const [method, setMethod] = useState([])

    const handleChangeA = (event) => {
        const {
            target: { value },
        } = event;
        setAv(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeC = (event) => {
        const {
            target: { value },
        } = event;
        setClas(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeM = (event) => {
        const {
            target: { value },
        } = event;
        setMethod(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/profile");
    }
    const methods = ['Pair', 'Group', 'In Person', 'Online'];
    const times = ['Mon. Morning', 'Mon. Afternoon', 'Tues. Morning', 'Tues. Afternoon', 'Wed. Morning', 'Wed. Afternoon', 'Thurs. Morning', 'Thurs. Afternoon', 'Fri. Morning', 'Fri. Afternoon', 'Sat. Morning', 'Sat. Afternoon', 'Sun. Morning', 'Sun. Afternoon'];
    const classes = ['BIOL 101', 'ECON101']

    return (
        <Stack id="editprofile-panel" direction="column" alignItems="center" textAlign="center">
            <h2>Create/Edit Profile</h2><br />
            <form onSubmit={handleSubmit}>
                <Stack id="profile-form" direction="column" alignItems="center">
                    <TextField id="first" label='First name' required
                        value={first} onChange={e => setFirst(e.target.value)} sx={{ m: 1, width: 250 }} /><br />
                    <TextField id='last' label='Last name' required
                        value={last} onChange={e => setLast(e.target.value)} sx={{ m: 1, width: 250 }} /><br />

                    <p>Birthday*</p>
                    <TextField type="date" id="birthday" required
                        value={birthday} onChange={e => setBirthday(e.target.value)} sx={{ m: 1, width: 250 }} /><br />

                    <p>Availability*</p>
                    <FormControl required sx={{ m: 1, width: 250, mb: 2 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Availability</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple={true}
                            value={av}
                            onChange={handleChangeA}
                            input={<OutlinedInput label="Availability" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {times.map((t) => (
                                <MenuItem key={t} value={t}>
                                    <Checkbox checked={av.indexOf(t) > -1} />
                                    <ListItemText primary={t} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <h3>Optional Preferences</h3><br />

                    <p>Profile Picture:</p>
                        <input type="file" accept="image/*" multiple="false"
                            value={picture} onChange={e => setPicture(e.target.value)} />
                    <br />

                    <p>Classes:</p>
                    <FormControl sx={{ m: 1, width: 250, mb: 2 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Classes</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple={true}
                            value={clas}
                            onChange={handleChangeC}
                            input={<OutlinedInput label="Class" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {classes.map((c) => (
                                <MenuItem key={c} value={c}>
                                    <Checkbox checked={clas.indexOf(c) > -1} />
                                    <ListItemText primary={c} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <p>Tell us some of your study methods:</p>
                    <FormControl sx={{ m: 1, width: 250, mb: 2 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Study Methods</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple={true}
                            value={method}
                            onChange={handleChangeM}
                            input={<OutlinedInput label="Study Methods" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {methods.map((m) => (
                                <MenuItem key={m} value={m}>
                                    <Checkbox checked={method.indexOf(m) > -1} />
                                    <ListItemText primary={m} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/* <p>Would you prefer studying as a pair or with a group?</p>
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
                    </select><br /> */}

                    <Button id="save-profile" variant="contained" type="submit">Save</Button>
                    <div id="error-message" style={{ color: "red" }}>{error}</div>
                </Stack>
            </form>
        </Stack>
    )
}

export default EditProfile;