import React,{ useState, useEffect, useCallback, useContext } from 'react';
import styled from "styled-components";
import RingLoader from "react-spinners/RingLoader";




const Loader = () => {
    return(
        <div>
        <RingLoader
        color={"#36d7b7"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>
    )
}

export default Loader;

const Section = styled.section`


`