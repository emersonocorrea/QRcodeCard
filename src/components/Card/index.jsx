import qrcode from '../../assets/image-qr-code.png'
import { MainTitle, Paragraph } from '../../styles/typograph'
import { StyledCard } from './style'



export const Card = () => {
    return(
        <StyledCard>
            <img src={qrcode} alt="qrcode" />
            <MainTitle>Improve your front-end skills by building projects</MainTitle>
            <Paragraph>scan the QR code to visit Frontend Mentor and take coding skills to next level</Paragraph>
        </StyledCard>
    )
}