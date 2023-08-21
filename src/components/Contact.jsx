import React,{useState} from "react";

const Contact = () => {

  const[user,setUser] = useState({
    name:"",email:"",message:""
  });
  let name , value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }


  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" required placeholder="Abc"
            value={user.name}
            onChange={handleInputs}

            />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" required placeholder="Abc@xyz.com"
             value={user.email}
             onChange={handleInputs}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              name="message"
              required
              value={user.message}
              onChange={handleInputs}
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
