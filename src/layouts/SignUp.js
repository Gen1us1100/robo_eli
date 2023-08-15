import mySvg from "../signup.svg"
import {Button, TextField,Checkbox} from "@mui/material"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function SignUp() {
    return(
    <div className="SignUpPage">
        <div className="Intro">
            <h1>Welcome!</h1>
            <img src={mySvg} alt="Sign UP SVG" className="img" />
        </div>
    
        <form className="SignUpForm">
            <h1 >Create Your Account!</h1>
            <div className= "socials">
                <Button variant="outlined" >Google</Button>
                <Button variant="outlined">FaceBook</Button>
                <Button variant="outlined">Twitter</Button>
            </div>
            {/* <div style={{display:'flex', alignItems:'center'}}><hr/><p>or</p><hr/></div>              */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
            <div>
                <p style={{width: '50px', textAlign: 'center'}}>OR</p>
            </div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black',width: '50px'}} />
            </div>

            
            <TextField sx={{ width: '80%', margin: '0 4.5rem' }} required id="standard-basic" label="Email" variant="outlined" />
            <TextField sx={{ width: '80%', margin: '0 4.5rem' }} required id="standard-basic" label="Password" variant="outlined" type="password"  />
            <TextField sx={{ width: '80%', margin: '0 4.5rem' }} required id="standard-basic" label="Confirm Password" variant="outlined" type="password" />
            
            <label><Checkbox sx={{ margin :'0 0 0 12rem'}} {...label} />I accept all terms & Conditions</label>
            <Button sx={{width:'40%', margin :'0 12rem',borderRadius:5}}variant="contained">Sign Up</Button>
            <p style={{margin :'0 14rem'}}>Already have an account? <a href="https://google.com">Log in</a></p>
        </form>
        
    </div>
    );
}

export default SignUp;