import React from "react"
import styled from "styled-components"

import {ACCENT_COLOR} from "../../constans/colors";

const Border = styled.div`
    width: 100%;
    display: block;
    height: 4px;
    background: ${ACCENT_COLOR};
`

const TopBorder = () => (
    <Border/>
)

export default TopBorder;