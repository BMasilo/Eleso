import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCarSide} from '@fortawesome/free-solid-svg-icons'

const Service = () => {
    return (
        <ul>
        <li><FontAwesomeIcon icon={faCarSide} /><a href='/'>Vehicle Maintanance</a></li>
        <li><FontAwesomeIcon icon={faCarSide} /><a href='/'>Vehicle Maintanance</a></li>
        <li><FontAwesomeIcon icon={faCarSide} /><a href='/'>Vehicle Maintanance</a></li>
    </ul>
    )
}

export default Service;