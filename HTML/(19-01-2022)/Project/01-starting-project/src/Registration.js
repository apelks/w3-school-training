import './Registration.css';


const Registration = () =>{
    return(

        <form className='registration'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' id="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id = "email"></input>
                </div>
                <div>
                    <label htmlFor="number">Enter Number:</label>
                    <input type="number" id="number"></input>                    
                </div>
                <div>
                    <p>Please Select your Gender</p>
                    <label htmlFor="male">Male</label>
                    <input type= "radio" id = "male" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" id = "female"/>

                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
        </form>

    );
};

export default Registration;