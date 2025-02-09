import { Button, Icon } from '@equinor/eds-core-react'
import styled from 'styled-components'
import { useLanguageContext } from 'components/Contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { Icons } from 'utils/icons'

const StyledButton = styled(Button)`
    width: 100px;
    align-items: baseline;
`

export function BackButton() {
    const { TranslateText } = useLanguageContext()
    let navigate = useNavigate()
    return (
        <StyledButton variant="ghost" onClick={() => navigate(-1)}>
            <Icon name={Icons.ArrowBack} size={16} />
            {TranslateText('Back')}
        </StyledButton>
    )
}
