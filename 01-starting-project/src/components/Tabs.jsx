export default function Tabs({children, buttons, buttonsContainer}){
    const ButtonContainer = buttonsContainer;
    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    )
}

//now we can reuse this component wherever we need