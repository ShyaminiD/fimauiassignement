export function Login() {
  return <section>
    <div className="userLogin">
      <p className="credentials">Enter the credentials</p>
      <input className="namecredential" type="text" placeholder="Enter your Name" /><br />
      <input className="passwordcredential" type="password" placeholder="Enter your Password" />
      <input className="submitbtn" type="submit" value="Submit" />
    </div>
  </section>;
}
