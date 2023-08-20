import { Button, ThemeButton } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';

export const SwitchLanguageButton = () => {

    const { t, i18n } = useTranslation();

    const switchLanguage = () => {
        const currLang = i18n.language;
        i18n.changeLanguage(currLang === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={switchLanguage}>
            {t('Translation')}
        </Button>
    );
};
