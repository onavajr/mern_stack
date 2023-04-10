
import {useState} from 'react';

const Form = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    return (
        <div>
            <h1>Form Components</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input onChangetype = {(e) => setName(e.target.value)} type='text'/>
                </div>
                <div>
                    <label>Name</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Name</label>
                    <input type='text'/>
                </div>
            </form>
        </div>
    );
};

export default Form;