import { NoteStyle } from "../styles/sidebarstyle";
import { AddressbarStyle, AddressStyle } from "../styles/addressbarstyle";

import Button from "./Button";

const Addressbar = () => {
    return (
        <AddressbarStyle>
            <h5>DELIVERY ADDRESS</h5>
            <NoteStyle>You can mention your delivery address here.</NoteStyle>
            <br />
            <h4>Vignesh Antonyraj</h4>
            <AddressStyle>
                <span>Plot Number : 1085, </span>
                <span>TNHB, Avadi,</span>
                <span>Chennai - 600054.</span>
            </AddressStyle>
            <Button name="Change Address" secondary />
        </AddressbarStyle>
    );
};

export default Addressbar;
