
export const getIconBgColor = (subject: string) => {
    let bgColor = '';

    switch (subject) {
        case 'HTML':
            bgColor = '#FFF1E9';
            break;
        case 'CSS':
            bgColor = '#E0FDEF';
            break;
        case 'JavaScript':
            bgColor = '#EBF0FF';
            break;
        case 'Accessibility':
            bgColor = '#F6E7FF';
            break;
    }

    return bgColor;
};