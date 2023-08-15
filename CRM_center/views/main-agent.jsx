export function Agent_view() {
    return (
        <>
        <container className="Main_view"> 
        {/* Contact Details section  */}
            <section className="Details">
                <nav className="Details_nav"> 
                    <h2>Contact details</h2>
                    <br />
                </nav>
            </section>

            {/* Script section  */}
            <section className="Script">
                <nav className="Script_nav">
                    <h2>Script</h2>
                    </nav>
            </section>

            {/* Notes and options section  */}
            <section className="Notes">
                <nav className="Notes_nav">
                    <h2>Notes</h2>
                </nav>
            </section>

            {/* Phone options section  */}
            <section className="Phone"></section>
        </container>
        </>
    )
}